import { Component, OnInit } from '@angular/core';
import {NcgService} from "./ncg.service"

@Component({
  selector: 'app-ncg',
  templateUrl: './ncg.component.html',
  styleUrls: ['./ncg.component.css']
})
export class NcgComponent implements OnInit {
  ncgs :any;

  constructor( private ncgService: NcgService ) { }


  ngOnInit() {
    this.getNcg();
  }

  getNcg() {
    this.ncgService.getNcg()
      .subscribe(data => {
          this.ncgs = data;
          console.log(this.ncgs);
        }
      );
  }
}
