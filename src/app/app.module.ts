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

@NgModule({
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
})
export class AppModule {}
