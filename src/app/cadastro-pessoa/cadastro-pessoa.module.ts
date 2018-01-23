import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CadastroPessoaFormComponent, CadastroPessoaListaComponent, CadastroPessoaComponent],
  declarations: [CadastroPessoaFormComponent, CadastroPessoaListaComponent, CadastroPessoaComponent]
})
export class CadastroPessoaModule { }
