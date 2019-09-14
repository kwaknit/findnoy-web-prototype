import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';
import { Error404Component } from './../_components/error-404/error-404.component';
import { DefaultComponent } from './pages/default/default.component';
import { UnderConstructionComponent } from './layouts/under-construction/under-construction.component';
import { AccessType } from '../_enums/access-type.enum';

const routes: Routes = [
    {
        path: '',
        component: ThemeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'police-stations',
                loadChildren: './pages/default/police-station/police-station.module#PoliceStationModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
                // }
            },
            {
                path: 'field-officer-location',
                loadChildren: './pages/default/field-officer-location/field-officer-location.module#FieldOfficerLocationModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
                // }
            },
            {
                path: 'crimes',
                loadChildren: './pages/default/crime/crime.module#CrimeModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
                // }
            },
            {
                path: 'filed-cases',
                loadChildren: './pages/default/filed-case/filed-case.module#FiledCaseModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
                // }
            },
            {
                path: 'committed-crimes',
                loadChildren: './pages/default/committed-crime/committed-crime.module#CommittedCrimeModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
                // }
            },
            {
                path: 'users',
                loadChildren: './pages/default/user/user.module#UserModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator]
                // }
            },
            {
                path: 'roles',
                loadChildren: './pages/default/role/role.module#RoleModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator]
                // }
            },
            {
                path: 'under-construction',
                component: DefaultComponent,
                children: [
                    { path: '', component: UnderConstructionComponent }
                ]
            }
        ],
    },
    { path: '**', component: Error404Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }