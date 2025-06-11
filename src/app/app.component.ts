import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from "./listado-productos/listado-productos.component";
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoProductosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private loginService: LoginService) {}

  titulo = 'Tienda Online';
  
  isautenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    return this.loginService.logout();
  }
}
