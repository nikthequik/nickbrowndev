import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'articles', component: ArticlesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProjectsComponent,
    HomeComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
