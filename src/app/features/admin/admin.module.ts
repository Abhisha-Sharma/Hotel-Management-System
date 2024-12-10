import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SettingManagementComponent } from './setting-management/setting-management/setting-management.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent,
    SettingManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
