import { Component, OnInit } from '@angular/core';
import {Char} from '../char';

// ./ is voor zelfde folder?
// ../ is voor bovenliggende folder?

@Component({
  selector: 'app-name-displayer',
  templateUrl: './name-displayer.component.html',
  styleUrls: ['./name-displayer.component.css']
})
export class NameDisplayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
