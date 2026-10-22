import { Service, Injectable, NgZone, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from "../../environments/environments";
import { Solicitud } from "./../models/solicitud";
import { getDatabase, ref, push, set, update, remove, onValue, Database } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged, User } from "firebase/auth";
import { Observable } from "rxjs";
import { initializeApp, getApps, getApp } from "firebase/app";


@Service()
export class ContactoService {
    private zone = inject(NgZone);
    private app = getApp.length ? getApp() : initializeApp(environment.firebaseConfig);
    private auth = getAuth(this.app);
    private database: Database = getDatabase(this.app);

    private async obtenerUsuario(): Promise<User> {
        if (this.auth.currentUser) return this.auth.currentUser;
        return new Promise<User>((resolve, reject) => {
            let cancelar: (() => void) | undefined;
            cancelar = onAuthStateChanged(this.auth, usuario => {
                if (usuario) {
                    cancelar?.();
                    reject(usuario);
                }
            }, error => {
                cancelar?.();
                reject(error);
            });
            signInAnonymously(this.auth).catch(error => {
                cancelar?.();
                reject(error);
            });
        });

    }

    private async ruta(): Promise<string> {
        const usuario = await this.obtenerUsuario();
        return `solicitudes/${usuario.uid}`;
    }

    async insertar(solicitud: Solicitud): Promise<void> {
        const { id, ...datos } = solicitud;
        const nuevo = push(ref(this.database, await this.ruta()));
        await set(nuevo, { ...datos, fechaRegistro: Date.now() });
    }


    // Consultar todos los registros de la base de datos
    consultar(): Observable<Solicitud[]> {
        return new Observable<Solicitud[]>(observer => {
            let activo = true;
            let detener: (() => void) | undefined;
            this.ruta().then(ruta => {
                if (!activo) return;
                detener = onValue(ref(this.database, ruta), snapshot => {
                    const datos = snapshot.val() || {};
                    const registros: Solicitud[] = Object.keys(datos).map(id => ({ id, ...datos[id] }));
                    this.zone.run(() => observer.next(registros));
                }, error => this.zone.run(() => observer.error(error)));
                if (!activo) detener();
            }).catch(error => { if (activo) this.zone.run(() => observer.error(error)); });
            return () => { activo = false; detener?.(); };
        });
    }

    // Actualiza los registros de la base de datos
    async actualizar(id: string, solicitud: Solicitud): Promise<void> {
        const { id: ignorar, ...datos } = solicitud;
        await update(ref(this.database, `${await this.ruta()}/${id}`), datos);
    }

    // Elimina los registros de la base de datos
    async eliminar(id: string): Promise<void> {
        await remove(ref(this.database, `${await this.ruta()}/${id}`));
    }

}