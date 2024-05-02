import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa HeroesComponent aquí

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesComponent,
    HeroDetailComponent, // Aquí se importa HeroesComponent como parte de los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
