import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:  `
  <div style="display: flex; justify-content: center;" class="bg-white">
    <div>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1 style="text-align: center;">Hey, cette page n'existe pas !</h1>
      </div>
    </div>`,
})
export class PageNotFoundComponent {}
