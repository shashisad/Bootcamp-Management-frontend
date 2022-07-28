import {Component, OnInit, ViewChild} from '@angular/core';
import {NcgService} from "../../services/ncg.service";
import {AdminTeamsService} from "../../services/admin-teams.service";
import {Ncg} from "../../../model/ncg.model"
import {NameFilter} from "../../../shared-components/admin-landing/admin-landing.component";


@Component({
  selector: 'app-ncg',
  templateUrl: './ncg.component.html',
  styleUrls: ['./ncg.component.css']
})


export class NcgComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium: any;
  lgOpen: boolean = false;
  allNcgs: any;
  ncgs :Ncg[] = [];
  teamMembers:any[] =[];
  model: any = {
    name: '',
    email: '',
    role: ''
  };

  modelUpdate: any = {
    name: 'Ketki Fadnavis',
    email: 'ketki@vmware.com',
    role: 'NCG',
    id:'62e1753704411fa38767f0b9'
  };
  selectedUser : Ncg ;
  actionBarConfig: Array<{
    id: string,
    label: string,
    isDisabled: boolean,
    iconShape: string
  }>
  edOpen: boolean = false;
  confirmed: boolean = false;
  successMessage: string ='';
  nameFilter = new NameFilter();
  delete: boolean = false;
  constructor( private ncgService: NcgService , private adminTeamsService: AdminTeamsService) { }


  ngOnInit() {
    this.getNcg();
    this.initializeActionBarConfig();
  }

  selectionChanged(e:Ncg){
    this.selectedUser = e;
    if (this.selectedUser) {
      this.setButtonDisableState('EDIT_USER', false) ;
      this.setButtonDisableState('DELETE_USER', false);
    }
  }

  setButtonDisableState(key:string, isDisabled:boolean){
    // @ts-ignore
    this.actionBarConfig.find(item => item.id === key).isDisabled = isDisabled;
  }

  initializeActionBarConfig() {
    this.actionBarConfig = [
      {
        id: "ADD_USER",
        label: "Add User",
        isDisabled: false,
        iconShape: "plus",
      },
      {
        id: "EDIT_USER",
        label: "Edit User",
        isDisabled: true,
        iconShape: "pencil",
      },{
        id: "DELETE_USER",
        label: "Delete User",
        isDisabled: true,
        iconShape: "close",

      },
      {
        id: "CREATE_TEAMS",
        label: "Create Teams",
        isDisabled: false,
        iconShape: "users",
      }

    ]

  }

  onActionButtonClick(key: string) {
    switch (key) {
      case 'ADD_USER':
        this.lgOpen = true
        break;
      case 'EDIT_USER':
        this.edOpen = true
        //this.successMessage = "Details updated for user - "+ this.selectedUser.name
        break;
      case 'DELETE_USER':
        //this.confirmed = true
        this.delete = true
        this.successMessage = "User "+this.selectedUser.name+" is deleted."
        break;
      case 'CREATE_TEAMS':
        this.confirmed = true
        this.successMessage = "Teams of 3 members created "
        //this.createAllTeams();
        break;
    }
  }

  getNcg() {
    this.ncgService.getNcg().subscribe(
      data => {
        this.allNcgs = data;
        var obj = this.adminTeamsService.parsingObject(this.allNcgs)
        for (var i of obj) {
          this.ncgs.push(i)
        }
      });
  }

  onChecked ($event:any, id:any) {
    const isChecked = $event.target.checked;
    if(isChecked === true) {
      this.teamMembers.push(id)
    }
    else {
      var indx = this.teamMembers.indexOf(id);
      if (indx >-1) {
        this.teamMembers.splice(indx,1);
      }
    }
  }

  createTeam() {
    this.adminTeamsService.createTeam(1,this.teamMembers).subscribe(
      data => {
        // console.log("Team created", data)
      }
    )
  }

  addUser() {
    this.lgOpen = false
    console.log("model",this.model)
    this.ncgService.addUser(this.model).subscribe(
      data => {
        console.log("User created", data)
      }
    )
  }

  deleteUser() {
    this.delete = false
    this.ncgService.deleteUser(this.selectedUser._id).subscribe(
      data =>{
        // console.log("User deleted", data)
      }
    )
    this.confirmed= true;
  }

  createAllTeams() {
    this.ncgService.createAllTeams().subscribe(
      data => {
        // console.log("created teams", data)
      }
    )
  }

  updateUser() {
    const body = {
      name: 'Ketki Fadnavis',
      email: 'kfadnavis@vmware.com',
      role: 'NCG',
      id: '62e1753704411fa38767f0b9'
    }
    this.ncgService.updateUser(body).subscribe(
      data =>{
        console.log("User updated", data)
      }
    )
  }
}


