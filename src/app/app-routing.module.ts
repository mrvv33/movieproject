import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MovielistComponent } from './pages/movielist/movielist.component';

const routes: Routes = [
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'homepage',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'movielist',component:MovielistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
