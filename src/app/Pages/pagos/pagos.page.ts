import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { PagosService } from '../../Services/pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  monto = '1'

  constructor(private payPal: PayPal,
              private Pro_pagos:PagosService) { }

  ngOnInit() {
  }

  pagar(){
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AWx9vd7DrXzsMzwbAKBkqgfY4nUDfsc-cSmtg-b2GJeGDcWJs1mtNTqdiUAakKenVMHrsqnQ1gHoCcK_'
    }).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment(this.monto, 'USD', 'Description', 'sale');
    this.payPal.renderSinglePaymentUI(payment).then(async respose => {
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
}
