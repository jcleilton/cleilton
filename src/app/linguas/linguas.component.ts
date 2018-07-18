import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linguas',
  templateUrl: './linguas.component.html',
  styleUrls: ['./linguas.component.css']
})
export class LinguasComponent implements OnInit {

  languages = [
    {tittle: 'Italiano',
    wrinting: 'Fluente',
    reading: 'Fluente',
    speaking: 'Fluente'},
    {tittle: 'Inglês',
    wrinting: 'Intermediário',
    reading: 'Técnico',
    speaking: 'Intermediário'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
