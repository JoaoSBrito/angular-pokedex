import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
})
export class PokemonCardComponent {
  @Input() pokemonName!: string;
  @Input() pokemonImage!: string;
  @Input() pokemonTypes!: { type: { name: string } }[];

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  typeColors: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  getBackgroundColor(type: string): string {
    return this.typeColors[type] || '#777'; // Cor padrão se não encontrar
  }
}
