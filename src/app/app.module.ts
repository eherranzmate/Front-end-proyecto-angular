import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CharacterListComponent } from './characters/components/character-list/character-list.component';
import { CharacterComponent } from './characters/components/character/character.component';
import { HouseComponent } from './houses/components/house/house.component';
import { HouseListComponent } from './houses/components/house-list/house-list.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './videos/video.component';
import { AssignTokenInterceptor } from './modules/auth/interceptors/assign-token.interceptor';
import { DetailCharacterComponent } from './characters/components/detail-character/detail-character.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CharacterListComponent,
    CharacterComponent,
    HouseComponent,
    HouseListComponent,
    HomeComponent,
    VideoComponent,
    DetailCharacterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AssignTokenInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
