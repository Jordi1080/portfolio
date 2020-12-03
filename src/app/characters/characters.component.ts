import { Component, OnInit } from '@angular/core';
import { Char } from '../char';
import { CHARACTERS } from '../char-list';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  koekje = ["appel", "banaan"];

  characters = CHARACTERS;
  currentCharacter: Char;
  
  constructor() {
    // koekje.push("hallo", 33, {})
   }

  ngOnInit(): void {
  }

  characterClicked(character: Char): void{
    console.log("click: " + character.name);
    this.currentCharacter = character;
  }

  doTheThing(){
    // alert("HEY NIET AANRAKEN");
    this.koekje.push("koekje");
    console.log(this.koekje);
    // document.getElementById(this.koekje).innerHTML = this.koekje;
  }

}
