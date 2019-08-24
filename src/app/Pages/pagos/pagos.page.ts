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

  addScript: boolean = false;
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
    this.payPal1.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    })).then(() => {
      let payment = new PayPalPayment(this.monto, 'USD', 'Description', 'sale');
      this.payPal1.renderSinglePaymentUI(payment).then(async respose => {
        await this.Pro_pagos.insertPago(respose, this.monto)
      }, () => {});
      }, () => {});
    }, () => {});
  }

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
      return actions.payment.execute().then(async payment => {
        console.log('pago', payment)
        await this.Pro_pagos.insertPago(payment, this.monto)
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
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
