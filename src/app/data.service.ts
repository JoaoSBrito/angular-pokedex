import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // Get list of Pokemons
  getPokemons() {
    return this.http.get(`${this.apiUrl}/pokemon?limit=10`);
  }

  // Get a specific Pokemon by ID or name
  getPokemon(idOrName: string | number) {
    return this.http.get(`${this.apiUrl}/pokemon/${idOrName}`);
  }
}