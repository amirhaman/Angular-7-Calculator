import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit {

  value : string;

  constructor( ) { }
  

  ngOnInit() {
    this.value = '';
  }
  
  getVal(val : any) {
    if (val === "+" || val === "-" || val === "*" || val === "/"){
      this.value = this.value + ' ' + val + ' ';
    } else if (val === "%"){
      var temp = parseInt(this.value);
      var calculatePercentage = temp / 100;
      this.value = calculatePercentage.toString();
    } else {
      this.value += val ;
    }
  }

  onClickReset(){
    this.value = '';
  }

  doOperation(){
    this.value = eval(this.value);
  }

}
