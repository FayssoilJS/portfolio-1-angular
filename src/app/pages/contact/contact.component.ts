import { Component } from '@angular/core';
import { FormContact } from '../../../core/models/form-contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: FormContact = {}
}
