import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  public edu_filter(event) {
    console.log(event);
    switch (event.target.value) {
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
