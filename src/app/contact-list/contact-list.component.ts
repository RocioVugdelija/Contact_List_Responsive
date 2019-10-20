import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
 
@Component({
  selector: 'cpc-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  get contacts( ) {
    return this.contactService.contacts;
  }
 
  constructor(
    private contactService: ContactService
  ) { }
 
  ngOnInit() {
  }
 
}