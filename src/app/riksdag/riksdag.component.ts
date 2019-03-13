import { Component, OnInit } from '@angular/core';
import {default as members} from '../../assets/members.json';

export interface Party {
  id: number;
  name: string;
  partyname: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-riksdag',
  templateUrl: './riksdag.component.html',
  styleUrls: ['./riksdag.component.scss']
})
export class RiksdagComponent implements OnInit {
    parties: Party[] =[
      { id: 1, name: 'V', partyname: 'Vänsterpartiet' },
      { id: 2, name: 'S', partyname: 'Socialdemokraterna' },
      { id: 3, name: 'MP', partyname: 'Miljöpartiet' },
      { id: 4, name: 'C', partyname: 'Centerpartiet' },
      { id: 5, name: 'L', partyname: 'Liberalerna' },
      { id: 6, name: 'M', partyname: 'Moderaterna' },
      { id: 7, name: 'KD', partyname: 'Kristdemokraterna'  },
      { id: 8, name: 'SD', partyname: 'Sverigedemokraterna' }
    ];

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    members = [];
    stats = {ja: 0, nej:0, franvaro: 0, avstar: 0};
    selectedParty = '';
    memberParty = '';


    selectParty(party){
        let yes = 0; let no = 0; let abscent = 0; let blank = 0;
        let id = Object.keys(members).filter(memberID=> (members[memberID].party === party.name));
        let list = [];
        for(var i = 0; i < id.length; i++) {
            let member = members[id[i]];
            if(member.aggregate_votes.Ja > 0){
             yes += member.aggregate_votes.Ja;
            }
            if(member.aggregate_votes.Nej > 0){
             no += member.aggregate_votes.Nej;
            }
            if(member.aggregate_votes.Frånvarande > 0){
             abscent += member.aggregate_votes.Frånvarande;
            }
            if(member.aggregate_votes.Avstår > 0){
             blank += member.aggregate_votes.Avstår;
            }
            list.push(member);

         }
         let tot = blank + yes + no + abscent;
         this.stats.ja = Math.round(yes/tot*100);
         this.stats.nej = Math.round(no/tot*100);
         this.stats.avstar = Math.round(blank/tot*100);
         this.stats.franvaro = Math.round(abscent/tot*100);
         this.members = list;
    }



  constructor() { }

  ngOnInit() {
  }



}
