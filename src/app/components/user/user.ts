import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  http = inject(HttpClient);
  userList: any = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
    .subscribe({
      next: (data) => {
        console.log(data);
        this.userList = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    })
  }

  addUser(){
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj)
    .subscribe({
      next: (data) => {
        console.log(data);
        alert("User Added Successfully");
        this.getUsers();
        this.reset();
      },
      error: (error) => {
        console.error('Error adding user:', error);
      }
    })
  }
  reset(){
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }

}
