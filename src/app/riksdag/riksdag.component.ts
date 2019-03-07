import { Component, OnInit } from '@angular/core';

export interface Party {
  id: number;
  name: string;
}


@Component({
  selector: 'app-riksdag',
  templateUrl: './riksdag.component.html',
  styleUrls: ['./riksdag.component.scss']
})
export class RiksdagComponent implements OnInit {
    parties: Party[] =[
      { id: 1, name: 'Vänsterpartiet' },
      { id: 2, name: 'Socialdemokraterna' },
      { id: 3, name: 'Miljöpartiet' },
      { id: 4, name: 'Centerpartiet' },
      { id: 5, name: 'Liberalerna' },
      { id: 6, name: 'Folkpartiet' },
      { id: 7, name: 'Moderaterna' },
      { id: 8, name: 'Kristdemokraterna' },
      { id: 9, name: 'Sverigedemokraterna' }
    ];
    selectedParty = 'Select';


  constructor() { }

  ngOnInit() {
  }



}
