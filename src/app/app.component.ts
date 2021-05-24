import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  roll_no: number;
  f_s: string;
  status: boolean;
  first_name: string;
  rollno: number;
  salary: number;
  status_reg: boolean;


  constructor(private httpClient: HttpClient,private router:Router) {
    
  }

    onroll_no(event:any) {
    this.roll_no = event.target.value;
    console.log(this.roll_no);
  }

  onf_s(event: any) {
    this.f_s = event.target.value;
    console.log(this.f_s);

  }

  login() {
    this.httpClient.get('http://localhost:8083/sample/login?roll_no=' + this.roll_no + '&f_s=' + this.f_s, { responseType: 'text' }).subscribe((result) => {
      if (result == "Success") {
        this.status = true;
        this.router.navigate(["home"]);
      }
      else {
        this.status = false;
      }
      console.log(result)
    }
    );
  }



    onfirst_name(event:any) {
    this.first_name = event.target.value;
    console.log(this.first_name);
  }

  onreg_roll_no(event: any) {
    this.rollno = event.target.value;
    console.log(this.rollno);

  }

  onsalary(event: any) {
    this.salary = event.target.value;
    console.log(this.salary);

  }
 
  register() {
     this.httpClient.post('http://localhost:8083/sample/register',{
       first_name: this.first_name,
       roll_no: this.rollno,
       salary: this.salary
    }, { responseType: 'text' }).subscribe((result) => {
      if (result == "Success") {
        this.status_reg = true;
        this.router.navigate(["/home"]);
      }
      else {
        this.status_reg = false;
      }
      console.log(result)
    }
    );
  }


  

}
