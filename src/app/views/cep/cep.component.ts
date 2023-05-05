import { Component } from '@angular/core';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {
  cep ='';

  constructor (private cepService: CepService) {}

  consultarCep(){
    this.cepService.obterEndereco(this.cep).subscribe()
  }
}
