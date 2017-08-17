import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  private skills;
  constructor(private db: AngularFireDatabase, private au: AngularFireAuth) {

    db.list('/user')
  }

  ngOnInit() {
  }

}
