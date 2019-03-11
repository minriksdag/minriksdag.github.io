import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {default as _members} from '../../assets/members.json';

@Component({
  selector: 'app-members',
  templateUrl: './memberList.component.html',
  styleUrls: ['./memberList.component.scss']
})
export class MemberListComponent implements OnInit {
  members = Object.values(_members).map((member: any) => {
    const totalVotes: any = Object.values(member.aggregate_votes)
      .reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
    Object.keys(member.aggregate_votes).forEach(voteType => {

      const votes = member.aggregate_votes[voteType];
      member['perc' + voteType] = (votes / totalVotes * 100).toFixed(1);
    });

    return member;
  });
  displayedColumns: string[] = ['name', 'party', 'birthyear', 'percJa', 'percNej', 'percAvstår', 'percFrånvarande'];
  dataSource = new MatTableDataSource(this.members);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log(this.members);
    this.dataSource.sort = this.sort;
  }

}
