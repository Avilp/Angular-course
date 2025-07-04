import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = 'https://tienda-online2-17c30-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient, private loginService: LoginService){}

  listarProductos(): Observable<{[llave: string]: Producto}> {
    const token = this.loginService.getIdToken();
    const url_listar = `${this.url}datos.json?auth=${token}`;
    return this.httpClient.get<{[llave: string]: Producto}>(url_listar);
  }

  agregarProducto(producto: Producto): Observable<any>{
    const token = this.loginService.getIdToken();
    const url_agregar = `${this.url}datos.json?auth=${token}`;
    // Aquí se genera una llave única para el producto
    // En Firebase, al hacer un POST, se genera una llave automáticamente
    return this.httpClient.post(url_agregar, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_modificar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.put(url_modificar, producto);
  }

  eliminarProducto(llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_eliminar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.delete(url_eliminar);
  }
}
