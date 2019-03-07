import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as _comparisons from '../../assets/party_compare.json';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit, OnChanges {
  comparisons = _comparisons.default;
  pairs: string[];
  parties: any = [
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
  }];
  @Input() partyOne: string;
  @Input() partyTwo: string;
  chosenPair: string;

  constructor() {}

  ngOnInit() {
    console.log(this.comparisons);
    delete this.comparisons.total;
    this.pairs = Object.keys(this.comparisons);
    console.log(this.pairs);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.prop);
    console.log('bruh');
  }

  changedSelect(event) {
    if (this.partyOne !== undefined && this.partyTwo !== undefined) {
      this.chosenPair = this.buildPair(this.partyOne, this.partyTwo);
    }
  }

  private buildPair(s1, s2) {
    return s1 < s2 ? `${s1}-${s2}` : `${s2}-${s1}`;
  }

}

