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
  { path: "**", 
    component: NopagefoundComponent, 
    data: {
      title: 'Page not found - RocknRoll',
      description: 'Rocknroll is where people list their music. More than 56 million people use Rocknroll to save and play their favourite music.',
      ogTitle: 'Play music better, together',
    } 
  },
];

@NgModule({
  imports: [
		RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}),
    PagesRoutingModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
