import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../model/assignment.model'

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.css']
})
export class StatusIconComponent {

  Status = Status;
  @Input()
  status: Status = Status.RED;

}
