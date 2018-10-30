import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientService } from './patient.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { RecordsComponent } from './records/records.component';
import { RecordsService } from './records.service';
import { AddRecordComponent } from './add-record/add-record.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { PatientFiterPipe } from './view-patients/patient-filter.pipe';
import { RecordFiterPipe } from './records/record-filter.pipe';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'patient', component: PatientsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'patients', component: ViewPatientsComponent, canActivate: [AuthGuard] },
  { path: 'records', component: RecordsComponent, canActivate: [AuthGuard] },
  { path: 'addRecord', component: AddRecordComponent, canActivate: [AuthGuard] },
  { path: 'editPatient', component: EditPatientComponent, canActivate: [AuthGuard] },
  { path: 'editRecord', component: EditRecordComponent, canActivate: [AuthGuard] }
];
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    ViewPatientsComponent,
    RecordsComponent,
    AddRecordComponent,
    EditPatientComponent,
    EditRecordComponent,
    PatientFiterPipe,
    RecordFiterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [PatientService, AuthService, AuthGuard, RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
