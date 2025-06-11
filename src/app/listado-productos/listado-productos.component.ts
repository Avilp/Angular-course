import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  productos: { [llave: string]: Producto } = {}; // Objeto para almacenar los productos
  productosSubscription: Subscription | null = null; // Subscription para manejar la actualización de productos

  constructor(private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarProductos();

    this.productosSubscription = this.productoService.productosActualizados.subscribe((productos) => {
      this.productos = productos;
    })
  }

  cargarProductos() {
    this.productoService.listarProductos().subscribe((productos: { [llave: string]: Producto }) => {
      this.productos = productos;
      this.productoService.setProductos(productos); // Actualizar el servicio con los productos cargados
    })
  }

  obtenerLlaves(): string[] {
    if (this.productos) {
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void {
    if (this.productosSubscription != null) {
      this.productosSubscription.unsubscribe(); // Limpiar la suscripción para evitar fugas de memoria
    }
  }

}
