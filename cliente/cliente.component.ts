import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  listaClientes: Cliente[] = [];
  cliente = new Cliente();
  estaEditando = false;


  constructor(private clienteService: ClienteService){}

  listar(){
    // Subscribe serve para obter oq será dado de retorno. como se estivesse falando "quero saber oq vc receber de resposta", então vc "se inscreve" para receber as respostas
    // Dentro colocamos a função q vamos ativar ao receber uma resposta
    // Até a parte do listar, quando finalizado até ali, os dados são mandados para o observable, e quando se obtem uma resposta é chamado o subscribe onde realiza a função
    this.clienteService.listar().subscribe(clientes => {
        this.listaClientes = clientes;
    });
  }

  inserir(){
    this.clienteService.inserir(this.cliente).subscribe(cliente => {
      this.listar();
    });
    }

    remover(id: number){
      this.clienteService.remover(id).subscribe(() => {
        this.listar();
      });
    }

    atualizar(){
      this.clienteService.atualizar(this.cliente).subscribe(cliente => {
        this.listar();
      });
      }

      salvar(){
        if(this.estaEditando){
          this.atualizar();
        }else{
          this.inserir();
        }
      }

      selecionar(cliente: Cliente){
        this.cliente = cliente;
        this.estaEditando = true;
      }

      cancelar(){
        this.estaEditando = false;
        this.cliente = new Cliente();
      }

  }



