import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private au: AngularFireAuth) { }

  ngOnInit() {
  }

}
