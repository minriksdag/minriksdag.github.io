import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {default as _members} from '../../assets/members.json';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  id;
  member;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.member = Object.values(_members).filter((member: any) => member.id === this.id)[0];
    console.log(this.member);

  }

}
