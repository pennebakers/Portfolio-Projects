import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from './login/login.component';
import { Employee101Component } from './employee101/employee101.component';
import { PendingGradesComponent } from './pending-grades/pending-grades.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { SubmitMyRequestComponent } from './submit-my-request/submit-my-request.component';
import { UploadMyGradeComponent } from './upload-my-grade/upload-my-grade.component';
import { ViewMyRequestsComponent } from './view-my-requests/view-my-requests.component';

const routes: Routes = [
{path: 'login', component: Login},
{path: 'employee101', component: Employee101Component},
{path: 'pendingGrades', component: PendingGradesComponent},
{path: 'pendingRequests', component: PendingRequestsComponent},
{path: 'submitRequest', component: SubmitMyRequestComponent},
{path: 'uploadGrade', component: UploadMyGradeComponent},
{path: 'viewRequests', component: ViewMyRequestsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
