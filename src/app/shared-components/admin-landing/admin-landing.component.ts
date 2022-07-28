import {Component,OnInit} from '@angular/core';
import {NcgService} from "../../admin-pages/services/ncg.service";
import {Ncg} from "../../model/ncg.model";
import {AdminTeamsService} from "../../admin-pages/services/admin-teams.service";
import {HttpClient} from "@angular/common/http";
import {ClrDatagridStringFilterInterface} from "@clr/angular";

export class NameFilter implements ClrDatagridStringFilterInterface<Ncg> {
  accepts(user:Ncg, search: string):boolean {
    return "" + user.name == search
      || user.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  nameFilter = new NameFilter();
  allNcgs: any;
  ncgs :Ncg[] = [];
  fileName = '';

  constructor(private ncgService: NcgService, private adminTeamsService: AdminTeamsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllNcgs();
  }

  getAllNcgs() {
    this.ncgService.getNcg().subscribe(
      data => {
        this.allNcgs = data;
        var obj = this.adminTeamsService.parsingObject(data);
        for (var i of obj) {
          this.ncgs.push(i)
        }
      });
  }

  onFileSelected(event: Event) {

    // @ts-ignore
    const file:File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);
      const upload$ = this.http.post("/api/v1/user/addAll", formData);
      upload$.subscribe();
    }
  }

}
