import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameDisplayerComponent } from './name-displayer/name-displayer.component';
import { CharactersComponent } from './characters/characters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConverterComponent } from './converter/converter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { GamedevComponent } from './gamedev/gamedev.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
// import {FormsModule} from '@angular/forms'; dit toevoegen als er iets met forms niet werkt

@NgModule({
  declarations: [
    AppComponent,
    NameDisplayerComponent,
    CharactersComponent,
    NavbarComponent,
    ConverterComponent,
    GalleryComponent,
    HomeComponent,
    GamedevComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
    , FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
