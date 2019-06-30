import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  latitude = 52.401818;
  longitude = 16.899764;
  zoom = 16;
}

export class ContactFormComponent implements OnInit{
  ngOnInit(){
    
  }
}


