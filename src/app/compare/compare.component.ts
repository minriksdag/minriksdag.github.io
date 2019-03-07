import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as _comparisons from '../../assets/party_compare.json';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit, OnChanges {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    }
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

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
      this.updateChart();
    }
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  private buildPair(s1, s2) {
    return s1 < s2 ? `${s1}-${s2}` : `${s2}-${s1}`;
  }

  updateChart() {
    this.lineChartLabels = Object.keys(this.comparisons[this.chosenPair]);
    const values = Object.values(this.comparisons[this.chosenPair]);
    console.log(values);
    this.lineChartData = [
      { data: values, label: this.chosenPair }
    ];
  }

}

