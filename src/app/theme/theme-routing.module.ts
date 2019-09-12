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
                path: 'categories',
                loadChildren: './pages/default/category/category.module#CategoryModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
                // }
            },
            {
                path: 'subcategories',
                loadChildren: './pages/default/subcategory/subcategory.module#SubcategoryModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
                // }
            },
            {
                path: 'files',
                loadChildren: './pages/default/file/file.module#FileModule',
                // canActivate: [RoleGuard],
                // data: {
                //     allowedRoles: [AccessType.SystemAdministrator, AccessType.ApplicationAdministrator]
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