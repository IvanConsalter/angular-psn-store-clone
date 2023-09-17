import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameList: Array<Game> = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getGameList().subscribe(data => {
      this.gameList = data.results
      this.gameList.map( game => {
        game.price = this.generatePrice();
      })
    });

  }

  generatePrice(): number {
    return Math.floor(Math.random() * (100 - 1) + 1);
  }
}
