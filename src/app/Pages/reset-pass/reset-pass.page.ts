import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  constructor(private Pro_user:UserService) { }

  ngOnInit() {
  }
  celularConfirmado = false
  codigoConfirmado = false
  textBoton = "Siguiente"
  codigoEnviado = null;

  botonAvance(p_valor){
    console.log('aqui van',p_valor.form.value.celular)
    if (!this.celularConfirmado) {
      this.Pro_user.confirmarCelular(p_valor.form.value.celular).subscribe(resp=>{
        if (resp!=null) {
            if (resp.codigo != null) {
              this.codigoEnviado = resp.codigo
              this.celularConfirmado = true
              this.textBoton = "Confirmar Codigo"
            }
        }
      })
    }else if (this.celularConfirmado && !this.codigoConfirmado) {
        if (p_valor.form.value.codigo = this.codigoEnviado) {
          this.codigoConfirmado = true
          this.textBoton = "Cambiar Contraseña"
        }else{

        }
    }else if (this.celularConfirmado && this.codigoConfirmado) {
      
    }
  }
}
