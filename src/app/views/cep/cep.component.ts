import { Component } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {
  cep ='';
  endereco?: Endereco = undefined;

  constructor (private cepService: CepService) {}

  consultarCep(){
    this.cepService.obterEndereco(this.cep).subscribe(endereco => {
      this.endereco = endereco;
    })
  }
}
