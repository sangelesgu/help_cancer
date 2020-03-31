import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { SpecialistsListComponent } from './specialists-list/specialists-list.component';
import { SpecialistFormComponent } from './specialist-form/specialist-form.component';
import { GroupsComponent } from './groups/groups.component';
import { NofoundComponent } from './nofound/nofound.component';
import { SpecialistPageComponent } from './specialist-page/specialist-page.component';
import { GroupComponent } from './group/group.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';

const RouterConfig: Routes = [
  {"path": "", "component":HomeComponent},
  {"path": "home", "component":HomeComponent},
  {"path": "articles", "component":ArticlesComponent},
  {"path": "article/:id", "component":ArticleComponent},
  {"path": "register", "component":RegisterComponent},
  {"path": "login/:users", "component":LoginComponent},
  {"path": "profile/:id", "component":ProfileComponent},
  {"path": "users", "component":ListUsersComponent},
  {"path": "registerSpecialist", "component":SpecialistFormComponent},
  {"path": "signin/:specialist", "component":SigninComponent},
  {"path": "specialists", "component":SpecialistsListComponent},
  {"path": "specialist/:id", "component":SpecialistComponent},
  {"path": "specialistpage/:id", "component":SpecialistPageComponent},
  {"path": "groups", "component":GroupsComponent},
  {"path": "group/:id", "component":GroupComponent},
  {"path": "**", "component":NofoundComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ArticlesComponent,
    ArticleComponent,
    ListUsersComponent,
    SpecialistComponent,
    SpecialistsListComponent,
    SpecialistFormComponent,
    GroupsComponent,
    NofoundComponent,
    SpecialistPageComponent,
    GroupComponent,
    FooterComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
