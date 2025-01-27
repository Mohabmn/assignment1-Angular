import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  flags:any = {
    username: true,
    userage: true,
    useremail: true,
    userpass: true
  };

  typing(field: string , event:Event): void {
    this.flags[field] = false;
    console.log('sh8al');
    const inputValue = (event.target as HTMLInputElement).value;
    console.log(inputValue);
    
    this.flags[field] = inputValue === '';
    
  }
}
