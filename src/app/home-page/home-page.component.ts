import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  handler: any;
  amount: number = 500; // = $5.00

  constructor() { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_uO9BDVACknuPySBLobjGjdwQ',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: (token) =>{
        console.log(token);
      }
    });
  }

  handlePayment() {
    this.handler.open ({
      name:'Test',
      description: 'Test Ortvi',
      amount: this.amount
    })
    console.log('ok');
  }

  @HostListener('window:popstate')
  onpopstate() {
    this.handler.close();
  }

}
