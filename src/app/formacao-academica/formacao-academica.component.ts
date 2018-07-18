import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacao-academica',
  templateUrl: './formacao-academica.component.html',
  styleUrls: ['./formacao-academica.component.css']
})
export class FormacaoAcademicaComponent implements OnInit {

  education = [
    {institution: 'Universidade Estácio de Sá',
    tittle: 'Análise e desenvolvimento de sistemas',
    beginning: '01/2014',
    ending: '10/2016'},
    {institution: 'Universidade Estácio de Sá',
    tittle: 'Sistemas de Informação',
    beginning: '07/2017',
    ending: '12/2018'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
