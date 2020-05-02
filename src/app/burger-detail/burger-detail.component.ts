import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../swagger/api/burgers.service';
import { BurgerDetail } from '../swagger/model/models';
import { Nutriment } from '../swagger/model/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {

  //Burger de test

  /*
    id: 0,
    name: "Le veggie",
    price: 2.5,
    image: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/dossier-de-la-redac/burger-veggie/92821415-3-fre-FR/10-burgers-vegetariens-qui-reduisent-l-empreinte-carbone.jpg",
    nutriscore: "A",
    nutriments: {
      energyKcal: 500,
      saturatedFat: 25,
    }
   */

  //variable de burger clean
  _myBurger;

  constructor(
    private burgersService : BurgersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBurger();
  }

  getBurger() : void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.burgersService.burgerDetail(id)
        .subscribe(burger => this._myBurger = burger);
  }
}
