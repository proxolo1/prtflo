import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private birdService:BirdsService) { }

  ngOnInit(): void {
    let birds=<HTMLDivElement>document.querySelector(".birds");
    this.birdService.init(2,birds)
  }

}
