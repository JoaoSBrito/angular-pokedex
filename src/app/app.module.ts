import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { DataService } from './data.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    PokemonListComponent,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
