import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { ForexComponent } from './forex/forex.component';
import { CuacaComponent } from './cuaca/cuaca.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-v2', component: DashboardV2Component },
  { path: 'dashboard3', component: Dashboard3Component },
  { path: 'mahasiswa', component: MahasiswaComponent },
  { path: 'forex', component: ForexComponent },
  { path: 'cuaca', component: CuacaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
