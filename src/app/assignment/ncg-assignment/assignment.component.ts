import { Component, OnInit , ViewChild} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium:  any;
  lgOpen: boolean = false;
   readMore = false;
  longText = `This is long paragraph text containing several words continued. An example of implementing dynamically limit long text This is long paragraph text containing several words continued. An example of implementing dynamically limit long text This is long paragraph text containing several words continued. An example of implementing dynamically limit long text`;

  showText() {
    this.readMore = !this.readMore
  }

  constructor() { }

  ngOnInit(): void {
  }

}
