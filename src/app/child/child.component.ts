import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input () cash: string
  @Input () plot: string
  @Input() PData: number;
  constructor() { }

  ngOnInit() {
  }

}
