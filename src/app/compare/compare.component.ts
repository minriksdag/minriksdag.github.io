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
    { data: [], label: '' }
  ];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            min: 0,
            max: 100
          }
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
    { name: 'Centerpartiet',
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
  @Input() partyOne: string;
  @Input() partyTwo: string;
  chosenPair: string;

  constructor() {}

  ngOnInit() {
    delete this.comparisons.total;
    this.pairs = Object.keys(this.comparisons);
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  changedSelect(event) {
    if (this.partyOne !== undefined && this.partyTwo !== undefined) {
      this.chosenPair = this.buildPair(this.partyOne, this.partyTwo);
      this.updateChart();
    }
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {

  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {

  }

  private buildPair(s1, s2) {
    return s1 < s2 ? `${s1}-${s2}` : `${s2}-${s1}`;
  }

  updateChart() {
    this.lineChartLabels = Object.keys(this.comparisons[this.chosenPair]).map(str => str.substring(0, 4));
    const values = Object.values(this.comparisons[this.chosenPair]);
    this.lineChartData = [
      { data: values, label: this.chosenPair }
    ];
  }

}

