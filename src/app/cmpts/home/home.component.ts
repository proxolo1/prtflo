import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private birdService:BirdsService){
  }

  ngOnInit(): void {
    let birds=<HTMLDivElement>document.querySelector(".birds");
   
    this.birdService.init(30,birds);

  }

}
