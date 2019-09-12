import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: LoginComponent },
            { path: 'logout', component: LogoutComponent }
        ]
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    declarations: [LoginComponent, LogoutComponent],
    providers: [AuthService]
})
export class AuthModule { }
