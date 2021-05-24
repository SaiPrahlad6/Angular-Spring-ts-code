import { Component, OnInit } from '@angular/core';
// import { MatPaginatorModule } from '@angular/material/paginator';


import Students from './College_details Task.json';

import {Studentclass} from  './studentclass';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  first_name: any;
  college_name: string;
  flag: boolean;
  headers = ["name","year_founded","state","city","facilities"];
    
  public StudentList: { name: string, year_founded: string, state: string, city: string, facilities: string }[] = Students;
  public SearchList: { name: string, year_founded: string, state: string, city: string, facilities: string }[]=Students;
   public fac_List: { name: string, year_founded: string, state: string, city: string, facilities: string }[]=Students;
  public temp: string[] = Studentclass.sorting();
  public fac_item: string;
  public fac_flag: boolean;

  constructor() { }

  ngOnInit(): void {
    this.StudentList = Students;  
  }

  search() {
    this.flag = false;
    if (this.first_name == "") {
      this.ngOnInit();
    }
    else {
      this.StudentList=this.StudentList.filter(res => {
        return res.name.toLocaleLowerCase().match(this.first_name.toLocaleLowerCase());
      })
    }
  }
  
  dropdown() {
   
    console.log(this.college_name);
    if (this.college_name == "") {
      this.flag = false;
      this.SearchList = Students;
    }
    else {
 this.flag = true;
      this.SearchList = this.StudentList.filter(res => {
        return res.city.toLocaleLowerCase().match(this.college_name.toLocaleLowerCase());
      })
    }
  }
  falsing() {
    // this.flag = false;
    this.ngOnInit();
    this.college_name = "";
  }

  facili() {
    this.flag = false;
    this.fac_flag = false;
    console.log(this.fac_item);
    if (this.fac_item = "") {
      this.fac_List = Students;
    }
    else {
      this.fac_List = this.StudentList.filter(res => {
        return res.facilities.toLocaleLowerCase().match(this.fac_item.toLocaleLowerCase());
      })
    }
    console.log(this.fac_List);
  }

  

}
