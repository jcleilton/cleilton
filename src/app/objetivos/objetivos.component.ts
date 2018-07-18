import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent implements OnInit {

  interesting = 'Analista de sistemas desenvolvedor desktop, web e mobile';

  constructor() { }

  ngOnInit() {
  }

}

