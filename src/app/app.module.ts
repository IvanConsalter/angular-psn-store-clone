import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    CardGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
