import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  //variaveis com conteudo
  name: string = "vinicius";
  idade: number = 19;
  afazeres: string[] = ["estudar", "Praticar programação", "ir para o exercito"];
  tamanho: number = 1.89;
  notebook = {
    marca: "lenovo",
    tempoUso: "4meses",
  }
  //variaveis vazias
  a?: string; //pode ser ou nao nula
  b!: string; //é obrigatoriamente nula

  constructor() { }

  ngOnInit(): void {
  }

}
