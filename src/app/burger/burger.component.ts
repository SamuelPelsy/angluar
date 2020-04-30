import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../swagger/api/burgers.service';
import { Burger } from '../swagger/model/models';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  //Attributs

  //Constructeur
  constructor() { 
  }

  //ouais ouais
  ngOnInit() {
  }

}
