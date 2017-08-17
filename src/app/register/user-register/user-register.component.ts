import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  private edu;
  private isNE: boolean = false;
  private isSSC: boolean = false;
  private isHSC: boolean = false;
  private isG: boolean = false;
  private isPG: boolean = false;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

  }

  public requestAutocompleteItems = (text: string): Observable<any[]> => {
    return this.db.list('/skills').map(x => {
      return x;
    })
  };

  public edu_filter(val) {
    console.log(val);
    switch (val) {
      case 'ne':
        this.isNE = true;
        this.isSSC = false;
        this.isHSC = false;
        this.isG = false;
        this.isPG = false;
        break;
      case 'ssc':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = false;
        this.isG = false;
        this.isPG = false;
        break;
      case 'hsc':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = true;
        this.isG = false;
        this.isPG = false;
        break;
      case 'g':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = true;
        this.isG = true;
        this.isPG = false;
        break;
      case 'pg':
        this.isNE = false;
        this.isSSC = true;
        this.isHSC = true;
        this.isG = true;
        this.isPG = true;
        break;
    }
  }

}
