import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public contacts = [ ]
  constructor(
    private httpClient: HttpClient
    ) {
    
      this.httpClient.get('assets/mocks/contacts.json').subscribe(
        {
          next:(contacts : any []) =>
          {
            this.contacts= contacts;
          }
          
        }
      )
   
  }
  
}
