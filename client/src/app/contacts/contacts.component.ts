import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { contacts } from './MOCK_DATA';
class Contact {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  openDrop: boolean = false;
  selectedItem: Contact;
  contacts: Contact[] = contacts;
  filterContacts: Contact[] = [];
  constructor() {}

  ngOnInit(): void {
    this.filterContacts = this.contacts;
  }

  onOpenDrop(state) {
    this.openDrop = state;
  }

  onSelectItem(contact: Contact) {
    this.selectedItem = contact;
  }

  onSearchContact(event: any) {
    const value = (event.target.value || '').toLowerCase();

    this.filterContacts = this.contacts.filter((c) => {
      const name = c.name.toLowerCase();
      const email = c.email.toLowerCase();
      return name.includes(value) || email.includes(value);
    });
  }
}
