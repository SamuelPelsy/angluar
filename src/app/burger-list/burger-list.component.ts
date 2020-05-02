import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgersService } from '../swagger/api/burgers.service';
import { Burger } from '../swagger/model/models';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  //Variable dans laquelle tous les burgers iront
  _burgers;
  //On donne à notre composant l'api burger
  constructor(
    private burgersService : BurgersService,
    private route: ActivatedRoute) { }

  //Lorsque le composant s'init
  ngOnInit(): void {
    //On charge tous les burgers
    this.getBurgers();
  }

  //Fonction de récupération des burgers
  getBurgers() : void {
    this.burgersService.listBurgers()
      .subscribe(burgers => this._burgers = burgers)
  }
}
