import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {default as _members} from '../../assets/members.json';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  id;
  member;
  parties = [
    { name: 'Miljöpartiet',
      abbr: 'MP'
    },
    { name: 'Moderaterna',
      abbr: 'M'
    },
    { name: 'Centerparitet',
      abbr: 'C'
    },
    { name: 'Kristdemokraterna',
      abbr: 'KD'
    },
    { name: 'Liberalerna',
      abbr: 'L'
    },
    { name: 'Socialdemokraterna',
      abbr: 'S'
    },
    { name: 'Vänsterpartiet',
      abbr: 'V'
    },
    { name: 'Sverigedemokraterna',
      abbr: 'SD'
    }];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.member = Object.values(_members).filter((member: any) => member.id === this.id)[0];
    const totalVotes: any = Object.values(this.member.aggregate_votes)
      .reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
    Object.keys(this.member.aggregate_votes).forEach(voteType => {
      const votes = this.member.aggregate_votes[voteType];
      this.member['perc' + voteType] = (votes / totalVotes * 100).toFixed(1);
    });
    this.getMemberPhoto(this.id).then(url => {
      this.member.imageURL = url;
    });
  }

  getParty(abbr) {
    return this.parties.filter(pair => pair.abbr === abbr)[0].name;
  }

  async getMemberPhoto(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
      this.http.get(`https://data.riksdagen.se/personlista/?iid=${id}`, {responseType: 'text'}).subscribe((data) => {
        const re = /\/\/data.riksdagen.se\/filarkiv\/bilder\/ledamot\/.*_max.jpg/;
        const url = data.match(re)[0];
        console.log(url);
        resolve(url);
      });
    });
  }
}
