import { Component, OnInit } from '@angular/core';

import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  address = 'Rua Caubi, 1672';
  neighborhood = 'Barra do Ceará';
  cityState = 'Fortaleza/CE';
  bornDate = '28/09/1979';
  email = 'jcleilton@gmail.com';
  phoneNumber = '(85)98823-3353';
  linkedIn = 'https://www.linkedin.com/in/jcleilton/';

  constructor() { }

  ngOnInit() {
  }

}
