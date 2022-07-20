import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ncg',
  templateUrl: './ncg.component.html',
  styleUrls: ['./ncg.component.css']
})
export class NcgComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium:  any;
  lgOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
