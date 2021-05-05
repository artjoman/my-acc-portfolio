import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: "AIzaSyDHoxehqp2k4AdhyGUhBqqpwtni5DvQoiQ",
  authDomain: "my-acc-portfolio.firebaseapp.com",
  projectId: "my-acc-portfolio",
  storageBucket: "my-acc-portfolio.appspot.com",
  messagingSenderId: "327755363737",
  appId: "1:327755363737:web:a5eb7e1632f347ca5f0f08"
};

@NgModule({
  declarations: [
    AppComponent,
    PortfolioPageComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsListComponent,
    SkillsListComponent,
    ToolsListComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
