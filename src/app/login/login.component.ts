import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }
  user = {
    username: '',
    password: '',
    remember: false
  };

  ngOnInit() {
  }
  onSubmit() {
    console.log('User:', this.user);
    this.dialogRef.close();
  };
}
