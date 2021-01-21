import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path:'', 
    component: LoginComponent,
    data: {
      title: 'RocknRoll: Where the world list the music · RocknRoll',
      description: 'Rocknroll is where people list their music. More than 56 million people use Rocknroll to save and play their favourite music.',
      ogTitle: 'RocknRoll: Where the world builds software',
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
