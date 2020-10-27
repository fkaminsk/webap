import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { ChFontComponent } from './ch-font/ch-font.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    NavbarComponent,
    ChFontComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'page-one', component: PageOneComponent},
      {path: 'page-two', component: PageTwoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
