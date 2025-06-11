import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { LoginGuardService } from './login-guard.service';

export const routes: Routes = [
    {path:'', component: ListadoProductosComponent, canActivate: [LoginGuardService]}, //localhost:4200/
    {path:'listado', component: ListadoProductosComponent, canActivate: [LoginGuardService]},
    {path:'agregar', component: FormularioComponent, canActivate: [LoginGuardService]},
    {path:'editar/:llave', component: FormularioComponent, canActivate: [LoginGuardService] },
    {path: 'login', component: FormularioLoginComponent},
    // Ruta comodin para cualquier otra ruta no registrada
    {path: '**', component: ErrorComponent}
];
