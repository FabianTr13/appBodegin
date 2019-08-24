import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { PagosService } from '../../Services/pagos.service';
declare let paypal: any;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  monto = '1'

  constructor(private payPal1: PayPal,
              private Pro_pagos:PagosService) { }

  ngOnInit() {
  }

  pagar(){
    this.payPal1.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_'
    }).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal1.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment(this.monto, 'USD', 'Description', 'sale');
    this.payPal1.renderSinglePaymentUI(payment).then(async respose => {
      await this.Pro_pagos.insertPago(respose, this.monto)
    }, () => {
        // Error or render dialog closed without being successful
        console.log('error el se salio')
    });
    }, () => {
      // Error in configuration
      console.log('esta mal confiruado')
    });
  }, () => {
    // Error in initialization, maybe PayPal isn't supported or something else
    console.log('paypal is not supported')
  });
  }


  addScript: boolean = false;
  paypalLoad: boolean = true;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.monto, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
}
