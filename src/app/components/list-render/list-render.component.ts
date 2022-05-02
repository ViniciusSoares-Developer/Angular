import { Component, OnInit } from '@angular/core';
import { Animais } from '../interfaces/Animais';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animalDetalhes?: string;

  animals: Animais[] = [
    {nome: "bambi", tipo: "gato",idade: 1},
    {nome: "jorge", tipo: "cachorro",idade: 9},
    {nome: "corredor", tipo: "cavalo",idade: 15},
    {nome: "Harlequim", tipo: "gato",idade: 2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showIdade(param: Animais):void{
    this.animalDetalhes = `O animal ${param.nome} tem ${param.idade} anos!!`
  }

}
