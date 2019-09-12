import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigModule, ConfigLoader } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LayoutModule } from './theme/layouts/layout.module';
import { ThemeRoutingModule } from './theme/theme-routing.module';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { Error404Component } from './_components/error-404/error-404.component';

import { ScriptLoaderService } from './_services/script-loader.service';
import { ApiHandlerService } from './_services/api-handler.service';
import { TokenInterceptor } from './_interceptors/token.interceptor';
import { RoleGuard } from './_guards/role.guard';

import { UserService } from './_services/api/user.service';
import { CategoryService } from './_services/api/category.service';
import { RoleService } from './_services/api/role.service';
import { SharedDataService } from './_services/shared-data.service';
import { AuthGuard } from './_guards';
import { FileService } from './_services/api/file.service';
import { SubcategoryService } from './_services/api/subcategory.service';
import { PoliceStationService } from './_services/api/police-station.service';
import { CrimeService } from './_services/api/crime.service';

export function configFactory(http: HttpClient): ConfigLoader {
    return new ConfigHttpLoader(http, './assets/config/config.json');
}

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        Error404Component
    ],
    imports: [
        NgbModule.forRoot(),
        ConfigModule.forRoot({
            provide: ConfigLoader,
            useFactory: (configFactory),
            deps: [HttpClient]
        }),
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        HttpClientModule,
        PapaParseModule
    ],
    providers: [
        AuthGuard,
        RoleGuard,
        ScriptLoaderService,
        ApiHandlerService,
        SharedDataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        UserService,
        CategoryService,
        RoleService,
        FileService,
        SubcategoryService,
        PoliceStationService,
        CrimeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }