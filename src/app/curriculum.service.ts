import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  content: string = 'contact';
  user: string = 'jcleilton@gmail.com';
  private pass: string = 'avemaria';

  setContent(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  getPass() {
    return this.pass;
  }

  constructor() { }
}
