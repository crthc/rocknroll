import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
		path: "bands", loadChildren: () =>
			import('./Pages/bands/bands.module').then(m => m.BandsModule) 
  },
  { 
		path: "band/:id", loadChildren: () =>
			import('./Pages/band/band.module').then(m => m.BandModule) 
  },
  { path: "**", pathMatch: "full", redirectTo: "bands" },
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
