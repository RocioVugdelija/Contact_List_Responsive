import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cpc-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  get currentContact() {
    return this.contactService.contacts.find( contact => contact.id === this.currentId);
  }
  get currentId() {
    return this.activatedRoute.snapshot.paramMap.get('id')
  }
  changeFav(){
    this.currentContact.isFavorite = !this.currentContact.isFavorite;
  }
  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
