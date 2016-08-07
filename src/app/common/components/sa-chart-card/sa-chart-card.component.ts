import {Component, OnInit, OnDestroy, Input, ElementRef} from '@angular/core';
import { ISorting } from './../../services/ISorting';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { CommandService } from './../../services/command/command.service';

import * as d3 from 'd3';
import { Subscription } from 'rxjs/Subscription';


@Component({
  moduleId: module.id,
  selector: 'sa-chart-card',
  templateUrl: 'sa-chart-card.component.html',
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdIcon
  ],
  providers: [MdIconRegistry]
})
export class saChartCardComponent implements OnInit {
  private svg: any;
  private xScale: any;
  private yScale: any;
  private w: number = 430;
  private h: number = 120;
  private algorithmName: string;
  private _data: number[];
  private subscription: Subscription;
  private timeouts: any[] = [];

  @Input() data: number[];
  @Input('sorting-service') sortingService: ISorting;

  constructor(private elementRef: ElementRef, private command: CommandService) { }

  ngOnInit():any {
    this._data = this.data.slice();
    this.buildChart();
    this.algorithmName = this.sortingService.getAlgorithmName();

    this.subscription = this.command.commandsSource$.subscribe((command) => {
      if(command === 'start') {
        this.startSorting();
      } else if (command === 'stop') {
        this._data = this.data.slice();
        this.updateChart();
        this.sortingService.reset();
        this.timeouts.map((t) => clearTimeout(t));
      }
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  startSorting() {
    this._data = this.data.slice();
    this.sortingService.sort(this._data);

    for(let i = 0; i < this.sortingService.getNumberOfSteps(); i++) {
      let timeout = setTimeout(() => {
        this._data = this.sortingService.getNextStep();
        this.updateChart();
      }, i * 200);

      this.timeouts.push(timeout);
    }
  }

  buildChart() {
    this.svg = d3.select(this.elementRef.nativeElement).select('.chart').append('svg').attr('width', this.w).attr('height', this.h);
    this.xScale = d3.scale.ordinal().domain(this._data.map(i => i.toString())).rangeBands([0, this.w], 0.2, 0);
    this.yScale = d3.scale.linear().domain([0, d3.max(this._data)]).range([0, this.h]);

    this.svg.selectAll('rect')
      .data(this._data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any, i) => this.xScale(d))
      .attr('y', (d: any) => this.h - this.yScale(d))
      .attr('width', this.xScale.rangeBand())
      .attr('height', (d: any) => this.yScale(d));
  }

  updateChart() {
    let bar = this.svg.selectAll('rect')
      .data(this._data);

    bar.enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any, i) => this.xScale(d))
      .attr('y', (d: any) => this.h - this.yScale(d))
      .attr('width', this.xScale.rangeBand())
      .attr('height', (d: any) => this.yScale(d));

    bar.exit().remove();

    bar
      .transition().duration(100)
      .attr('y', (d: any) => this.h - this.yScale(d))
      .attr('height', (d: any) => this.yScale(d));
  }
}
