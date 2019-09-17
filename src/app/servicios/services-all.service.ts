import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesAllService {
  details: any;
  Items: any;
  opcion: any;
  baseUrl: string = 'http://10.133.10.223'
  sesioid: any;
  pasajeros: any[] = [];
  pasajerosIdaVuelta: any[] = [];
  resumen: any[] = [];
  items: any;

  constructor(private http: HttpClient, private storage: Storage) { }



  public login(login: any) {
    return this.http.post(this.baseUrl + '/auth/curl', login);

  }

  public listPasaPorAprobar(ConsultaPasajes: any) {
    return this.http.post(this.baseUrl + '/users/curl/consultar', ConsultaPasajes);
  }


  public solicitudPasajepersonal(solicitud: any) {
    return this.http.post(this.baseUrl + '/users/curl/consumirform/personal', solicitud);
  }


  public solicitudPasajeLaboral(solicitud: any) {
    return this.http.post(this.baseUrl + '/users/curl/consumirform/laboral', solicitud);
  }


  getCiudades(ciudad: any) {
    return this.http.post(this.baseUrl + '/users/consultaPaisesCurl/', ciudad);

  }

  getToken(): Observable<any> {
    return from(this.storage.get('datos'));
  }


  opcionHomeTicket() {
    return this.http.get(this.baseUrl + '/users/recordType');
  }

  obtenerDetallesPasajesPersonal(idAnticipo) {
    return this.http.post(this.baseUrl + '/users/detalleSolicitudPersonal', { anticipoId: idAnticipo })
  }

  obtenerDetallesPasajesLaboral(idAnticipo) {
    return this.http.post(this.baseUrl + '/users/detalleSolicitud', { anticipoId: idAnticipo })
  }



GuardarPasajero(pasajeros: any) {
    this.pasajeros = pasajeros;

  }

  entregarPasajeros() {
    return this.pasajeros;
  }

  GuardarPasajeroIdaVuelta(pasajeros: any) {
    this.pasajerosIdaVuelta = pasajeros;

  }

  entregarPasajerosIdaVuelta() {
    return this.pasajerosIdaVuelta;
  }
  
}
