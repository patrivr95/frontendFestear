import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleVideojuegoComponent } from './components/detalle-videojuego/detalle-videojuego.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CabeceraComponent,
    CatalogoComponent,
    DetalleVideojuegoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
