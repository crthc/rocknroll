import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { 
    path: "login",
    loadChildren: () =>
    import('./auth/login/login.module').then(m => m.LoginModule) 
  },
  { path: "**", component: NopagefoundComponent},
];

@NgModule({
  imports: [
		RouterModule.forRoot(routes),
    PagesRoutingModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
