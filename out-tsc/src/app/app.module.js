import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { AppErrorHandler } from './common/app-error-handler';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './services/authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsComponent } from './components/components.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoaccessComponent } from './noaccess/noaccess.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        CoursesService,
        AuthorsService,
        PostService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
        AuthService,
        OrderService,
    ], imports: [[
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot([
                { path: '', component: ComponentsComponent },
                { path: 'posts', component: PostsComponent },
                { path: 'admin', component: AdminComponent },
                { path: 'login', component: LoginComponent },
                { path: 'no-access', component: NoaccessComponent },
                { path: '**', component: NotFoundComponent },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        CoursesComponent,
        CourseComponent,
        AuthorsComponent,
        SummaryPipe,
        FavoriteComponent,
        BootstrapPanelComponent,
        ContactFormComponent,
        PostsComponent,
        ComponentsComponent,
        NavBarComponent,
        AdminComponent,
        LoginComponent,
        NoaccessComponent], imports: [BrowserModule,
        FormsModule,
        HttpModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    CoursesComponent,
                    CourseComponent,
                    AuthorsComponent,
                    SummaryPipe,
                    FavoriteComponent,
                    BootstrapPanelComponent,
                    ContactFormComponent,
                    PostsComponent,
                    ComponentsComponent,
                    NavBarComponent,
                    AdminComponent,
                    LoginComponent,
                    NoaccessComponent,
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    HttpModule,
                    RouterModule.forRoot([
                        { path: '', component: ComponentsComponent },
                        { path: 'posts', component: PostsComponent },
                        { path: 'admin', component: AdminComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'no-access', component: NoaccessComponent },
                        { path: '**', component: NotFoundComponent },
                    ]),
                ],
                providers: [
                    CoursesService,
                    AuthorsService,
                    PostService,
                    { provide: ErrorHandler, useClass: AppErrorHandler },
                    AuthService,
                    OrderService,
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=app.module.js.map