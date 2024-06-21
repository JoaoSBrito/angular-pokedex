import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service'; // Atualize o caminho conforme necessário
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonCardComponent]
})
export class PokemonListComponent {
  pokemons: any[] = [];

  constructor(private dataService: DataService) {
    this.loadPokemons();
  }

  loadPokemons() {
    this.dataService.getPokemons().subscribe((response: any) => {
      const results = response.results;
      results.forEach((result: any) => {
        this.dataService.getPokemon(result.name).subscribe((pokemon: any) => {
          this.pokemons.push(pokemon);
        });
      });
    });
  }
}