import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { ContatoComponent } from './contato/contato.component';
import { FormacaoAcademicaComponent } from './formacao-academica/formacao-academica.component';
import { LinguasComponent } from './linguas/linguas.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificadosComponent,
    ContatoComponent,
    FormacaoAcademicaComponent,
    LinguasComponent,
    ObjetivosComponent,
    PortfolioComponent,
    QualificacoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
