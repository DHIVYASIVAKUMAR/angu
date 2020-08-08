import { Component,OnInit } from '@angular/core';
import { SignupService } from './services/signup.service';
import { Login } from './classes/login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ngOnInit{
  lid: number;
  username: string;
  password: string;
  phonenum:string;
  getlog: Login[];
  postLog : Login[];
  var oget = new Login();
  oget.lid = this.lid;
  oget.username = this.username;
  oget.password = this.password;
  oget.phonenum = this.phonenum;
  var opost = new Login();
  opost.lid = this.lid;
  opost.username = this.username;
  opost.password = this.password;
  opost.phonenum = this.phonenum;


  title = 'dhivya';
  submit(): void{
    alert ( 'form submitted' );
}
OnInit(){
  this.SignupService.getdata(oget.lid).subcribe(
    data =>
    {
      this.getlog = data;
    }
  );
  this.SignupService.post(opost).subcribe(
    data =>
    {
      this.postlog = data;
    }
  );
}

}
