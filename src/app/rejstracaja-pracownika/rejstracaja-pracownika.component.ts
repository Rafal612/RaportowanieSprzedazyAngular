import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'rejstracaja-pracownika',
  templateUrl: './rejstracaja-pracownika.component.html',
  styleUrls: ['./rejstracaja-pracownika.component.css']
})
export class RejstracajaPracownikaComponent implements OnInit {

form = new FormGroup({
  imie: new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(60)
  ]),
  drugieImie: new FormControl('',[
    Validators.minLength(2),
    Validators.maxLength(60)
  ]),
  nazwisko: new FormControl('',[
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(120)
  ])
  // set imie(value) {
  //   this._imie = value;
  // },
 
})

get imie(){
  return this.form.get('imie');
}
get drugieImie(){
  return this.form.get('drugieImie');
}
get nazwisko(){
  return this.form.get('nazwisko');
}



  constructor() { }

  ngOnInit() {
  }



}
