import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSidenavModule
} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostBlogComponent } from './post-blog/post-blog.component';



const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'HomepageComponent', component: HomepageComponent},
  {path: 'AboutComponent', component: AboutComponent},
  {path: 'BlogComponent', component: BlogComponent},
  {path: 'ContactUsComponent', component: ContactUsComponent},
  {path: 'PortfolioComponent', component: PortfolioComponent},
  {path: 'ServicesComponent', component: ServicesComponent},
  {path: 'PostBlogComponent', component: PostBlogComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    PostBlogComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    BlogComponent,
    ContactUsComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PostBlogComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,

    BrowserAnimationsModule,
    RouterModule.forRoot(
        appRoutes,
        {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
