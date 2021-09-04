import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'progress-status',
  templateUrl: './progress-status.component.html',
  styleUrls: ['./progress-status.component.scss']
})
export class ProgressStatusComponent implements OnInit, OnChanges {
  @Input() totalMale: number
  @Input() totalFemale: number

  progressValue: number

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.progressValue = (this.totalMale + this.totalFemale) / this.totalFemale
  }

}
