import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSort, MatTableDataSource} from '@angular/material';
import {default as _members} from '../../assets/members.json';

function loadMembers() {
  return Object.values(_members).map((member: any) => {
    const totalVotes: any = Object.values(member.aggregate_votes)
      .reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
    Object.keys(member.aggregate_votes).forEach(voteType => {

      const votes = member.aggregate_votes[voteType];
      member['perc' + voteType] = (votes / totalVotes * 100).toFixed(1);
    });

    return member;
  });
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members = loadMembers();
  displayedColumns: string[] = ['name', 'party', 'birthyear', 'percJa', 'percNej', 'percAvstår', 'percFrånvarande'];
  dataSource = new MatTableDataSource(this.members);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(this.members);
    this.dataSource.sort = this.sort;
    this.getMemberPhoto(this.members[0].id);
  }

  async getMemberPhoto(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
      this.http.get(`http://data.riksdagen.se/personlista/?iid=${id}`, {responseType: 'text'}).subscribe((data) => {
        const re = /http:\/\/data.riksdagen.se\/filarkiv\/bilder\/ledamot\/.*_192.jpg/;
        const url = data.match(re)[0];
        console.log(url);
        resolve(url);
      });
    });
  }
}
