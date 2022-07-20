import { Component, OnInit , ViewChild} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium:  any;
  lgOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
