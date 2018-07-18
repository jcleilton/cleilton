import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  courses = [
  {institution: 'loiane.training',
  tittle: 'Estrutura de dados e Java avançado',
  period: '2016'},
  {institution: 'Universidade do Trabalho Digital',
  tittle: 'Java Orientado a Objetos com Banco de Dados',
  period: '2017'},
  {institution: 'Udemy',
  tittle: 'Curso Completo de Desenvolvimento IOS 11',
  period: '2018'},
  {institution: 'loiane.training',
  tittle: 'Angular 2',
  period: '2018'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

