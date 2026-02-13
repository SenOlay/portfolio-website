import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css'],
})
export class ContactsComponent {

  sendEmail(event: Event) {
    event.preventDefault();

    Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we send your message.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

     emailjs.sendForm(
      'service_fiz9a8b',
      'template_2tjilwa',
      event.target as HTMLFormElement,
      'VWadk5ZZBYe2ld5nM'
    )
    .then(() => {

      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'Your message was sent successfully.',
        confirmButtonColor: '#4ade80'
      });

      (event.target as HTMLFormElement).reset();
    })
    .catch((error) => {
      console.error('FAILED...', error);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#ef4444'
      });
    });
  }
}
