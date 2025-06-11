import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: { [llave: string]: Producto } = {}; // Objeto para almacenar los productos
  productosActualizados = new Subject<{ [llave: string]: Producto }>(); // Subject para emitir cambios en los productos

  constructor(private datosService: DatosService) {

  }

  listarProductos() {
    return this.datosService.listarProductos();

  }


  // Agregar o Modificar un producto existente
  guardarProducto(producto: Producto, llave: string | null = null) {
    if (llave === null)
      // Agregar
     {
      this.datosService.agregarProducto(producto).subscribe(() => {
        this.refrescarProductos();
      })
    }
    else {
      this.datosService.modificarProducto(producto, llave).subscribe(() => {
        this.refrescarProductos();
      });
    }
  }

  private refrescarProductos() {
    this.listarProductos().subscribe((productos: { [llave: string]: Producto }) => {
      this.setProductos(productos)
    })
  };

  setProductos(productos: { [llave: string]: Producto }){
    this.productos = productos;
    this.productosActualizados.next(this.productos); // Emitir los productos actualizados
  }


  getProductoByLlave(llave: string): Producto | undefined {
    return this.productos[llave];
  }

  eliminarProducto(llave: string) {
    this.datosService.eliminarProducto(llave).subscribe(() => {
      this.refrescarProductos();
    });
  }

}
