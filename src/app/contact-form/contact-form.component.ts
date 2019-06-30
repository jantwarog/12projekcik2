import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  submitted = false;
  onSubmit() { 
    console.log(this.model);    
    this.submitted = true; 
  }

  onChange(e) {
    console.log(e);
  }


  ngOnInit(){

  }

  model = new Contact('', '', '' )


}


export class Contact{
  constructor(
    public name: string,
    public email: string,
    public comment: string,
    ){}
}