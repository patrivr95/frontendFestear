import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleVideojuegoComponent } from './components/detalle-videojuego/detalle-videojuego.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: 'home', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogo/:id', component: DetalleVideojuegoComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
