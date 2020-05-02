import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// imports modules for routing
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component'; 

const routes: Routes = [
  { path: '', component: BurgerListComponent },
  { path: 'burger-list', component: BurgerListComponent },
  { path: 'burger/:id', component: BurgerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
