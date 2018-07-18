import { CurriculumService } from './curriculum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content: string;
  user: string;
  logon = false;
  keeping = false;

  constructor(private curriculumService: CurriculumService){

  }

  OnInit() {
    this.content = this.curriculumService.content;
    this.user = this.curriculumService.user;
  }

  changeContent(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  logOut() {
    this.logon = false;
  }

  login(mail: string, pass: string, keeping: boolean) {
    if (mail === this.curriculumService.user && pass.toString === this.curriculumService.getPass) {
      this.logon = true;
      this.keeping = keeping;
    }
    this.logon = false;
    alert('Usuário ou senha inválida');
  }
}
