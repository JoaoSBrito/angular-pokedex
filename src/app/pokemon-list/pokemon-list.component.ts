import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service'; // Atualize o caminho conforme necessário
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class PokemonListComponent {
  pokemons: any[] | null = null;

  constructor(private dataService: DataService) {
    this.loadPokemons();
  }

  loadPokemons() {
    this.dataService.getPokemons().subscribe((response: any) => {
      this.pokemons = response.results;
    });
  }
}