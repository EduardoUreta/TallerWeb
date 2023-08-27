import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './bloques/header/header.component';
import { MenuComponent } from './bloques/menu/menu.component';
import { ContenidoComponent } from './bloques/contenido/contenido.component';
import { FooterComponent } from './bloques/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { PedidosComponent } from './paginas/pedidos/pedidos.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { MenuMobileComponent } from './bloques/menu-mobile/menu-mobile.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ProductosComponent } from './paginas/productos/productos.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContenidoComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    PedidosComponent,
    VentasComponent,
    MenuMobileComponent,
    PrincipalComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
