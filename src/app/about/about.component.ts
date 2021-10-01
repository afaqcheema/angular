import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  profile:any[]=[
    {
      id:1,
      name:"Cheema",
      address:"Sialkot"
    },
    {
      id:2,
      name:"Shaheer",
      address:"Ramkot"
    },
    {
      id:3,
      name:"Asim",
      address:"Islamabad"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
