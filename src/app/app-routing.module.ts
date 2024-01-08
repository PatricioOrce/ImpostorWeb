import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';

export const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'setup', component: SetupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
