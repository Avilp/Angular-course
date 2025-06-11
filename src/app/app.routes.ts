import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';

export const routes: Routes = [
    {path:'', component: ListadoProductosComponent}, //localhost:4200/
    {path:'listado', component: ListadoProductosComponent},
    {path:'agregar', component: FormularioComponent},
    {path:'editar/:llave', component: FormularioComponent },
    {path: 'login', component: FormularioLoginComponent},
    // Ruta comodin para cualquier otra ruta no registrada
    {path: '**', component: ErrorComponent}
];
