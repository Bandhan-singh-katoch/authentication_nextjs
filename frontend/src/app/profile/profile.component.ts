import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  userId?:string;
  userEmail?: string;

  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.loadData();
    
  }

  loadData(){
    this.profileService.getProfile().subscribe(res=>{
      localStorage.setItem('userData',JSON.stringify(res));
      // console.log(res.userId);

      this.userId = res.userId;
      this.userEmail = res.username;
  });
  }



}
