import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor() { }

  input: number = 12;
  output: number;

  ngOnInit(): void {
  }

  convertNumber(input){
    this.output = input*input;
    console.log(input + "^2 = " + this.output);
  }

}
