import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetAPI {
  http = inject(HttpClient);
  posts: any[] = [];
  busUsers: any[] = [];

  constructor() {
    this.getData();
    this.getAllBusBookingUsers();
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data)=>{
        console.log('Data fetched successfully:', data);
        this.posts = data as any[]; // Type assertion to any[]
      },
      error: (error)=>{
        console.error('Error fetching data:', error);
      }
    })
  }

  getAllBusBookingUsers(){
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe({
      next: (res)=>{
        console.log('Fetched successfully:', res);
        this.busUsers = Array.isArray(res) ? res : (res as any).data || [];
        console.log('Formatting:', this.busUsers);
      },
      error: (error)=>{
        console.error('Error fetching data:', error);
      }
    })
  }

}
