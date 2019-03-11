import { Component, OnInit } from '@angular/core';
import * as members from './members.json';

export interface Party {
  id: number;
  name: string;
}
export interface Vote {
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


    selectedParty = '';
    selectedVote = '';

    show(){
        let v = Object.keys(members).filter(party=> (console.log(party)));
    //     if(members["0564126739422"].party === "M"){ members[party].party === "M"
    //     console.log("HEJ");
    // }
    console.log(v);
    }


  constructor() { }

  ngOnInit() {
  }



}
