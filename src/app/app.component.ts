import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics=["Angular", "React", "Vue"];

 userModel=new User('', "","",'','',true)

 Submit(): void {
  console.log(this.userModel);
  
 }
 changeValue() {
  console.log(this.userModel.name);
  
 }
}
