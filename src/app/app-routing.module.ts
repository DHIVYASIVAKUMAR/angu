import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComComponent } from './com/com.component';

const routes: Routes = [
  {path:'app-com',component:ComComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ComComponent];
