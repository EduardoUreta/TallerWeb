import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from "./paginas/inicio/inicio.component";
import { PrincipalComponent } from "./paginas/principal/principal.component";
import { LoginComponent} from "./paginas/login/login.component";
import { PedidosComponent } from "./paginas/pedidos/pedidos.component";
import { VentasComponent } from "./paginas/ventas/ventas.component";
import { ProductosComponent } from './paginas/productos/productos.component';



const routes: Routes = [

  {path:'', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'pedidos', component: PedidosComponent},
  {path:'ventas', component: VentasComponent},
  {path:"productos", component: ProductosComponent},
  {path:'**', pathMatch: 'full', redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

