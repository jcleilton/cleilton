import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.css']
})
export class QualificacoesComponent implements OnInit {

  skills = [
    {titulo: 'Java', skill: ['Java EE', 'JavaBean', 'JSP', 'JSF', 'JDBC', 'Hibernate', 'Servlet']},
    {titulo: 'Swift', skill: ['IOS Development', 'IOS Design Pattern', 'CoreData', 'Vapor']},
    {titulo: 'Data Bases e Design Patterns', skill: ['MySQL', 'PostgreSQL', 'GOF', 'GRASP', 'MVC']},
    {titulo: 'Web e HTTP services', skill: ['HTML 5', 'CSS 3', 'JavaScript', 'Jquery', 'Bootstrap 4', 'Angular', 'TypeScript', 'API Rest', 'JSON']}
  ];

  constructor() { }

  ngOnInit() {
  }

}
