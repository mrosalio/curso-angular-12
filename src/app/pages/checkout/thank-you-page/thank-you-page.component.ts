import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
    <div class="container">
      <h1 class="title">Thank you!</h1>
      <p class="content">
        Your order is on the way!
      </p>
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, doloremque velit. Sapiente necessitatibus iure
        corrupti officia nam blanditiis, incidunt ex in possimus et iusto labore! Voluptates laborum molestias sit adipisci.
      </span>
    </div>
  `,
  styleUrls: ['./thank-you-page.component.scss']
})

export class ThankYouPageComponent { }