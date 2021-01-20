import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { 
		path: "bands", loadChildren: () =>
			import('./Pages/bands/bands.module').then(m => m.BandsModule) 
  },
  { 
		path: "band/:id", loadChildren: () =>
			import('./Pages/band/band.module').then(m => m.BandModule) 
  },
  { 
		path: "info/:id", loadChildren: () =>
			import('./Pages/info/info.module').then(m => m.InfoModule) 
  },
  { 
		path: "login", loadChildren: () =>
			import('./auth/login/login.module').then(m => m.LoginModule) 
  },
  { path: '', pathMatch: "full", redirectTo: "login" },
  { path: "**", component: NopagefoundComponent}
];

@NgModule({
  imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: "enabled",
			anchorScrolling: "enabled",
		}),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
