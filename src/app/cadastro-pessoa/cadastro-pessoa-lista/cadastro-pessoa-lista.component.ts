import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { query } from '@angular/core/src/animation/dsl';


@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {
  pessoasRef: AngularFireList<any>;
  pessoas: Observable<any[]>;


  constructor(private db: AngularFireDatabase) {

    this.pessoasRef = db.list('pessoas');
    
    this.pessoas = this.pessoasRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, 
                                 nome: c.payload.val().nome, 
                                 sobrenome: c.payload.val().sobrenome  }));
    });

    console.log(this.pessoas);
    }

  ngOnInit() { }

  updateItem(key: string, nome: string, sobrenome: string) {
    this.pessoasRef.update(key, { nome: nome, sobrenome: sobrenome });
  }

  deleteItem(key: string) {    
    this.pessoasRef.remove(key); 
  }
  
  pesquisarPessoa(nome: string, sobrenome: string){

    this.pessoas = this.pessoasRef.snapshotChanges();

    this.pessoas = this.pessoas.map(m => {
      return m.map(c => ({ key: c.payload.key, 
                           nome: c.payload.val().nome, 
                           sobrenome: c.payload.val().sobrenome  }));
    });


    if (nome != "")
      this.pessoas = this.pessoas.map(m => m.filter(f => f.nome == nome));
    if (sobrenome != "")
      this.pessoas = this.pessoas.map(m => m.filter(f => f.sobrenome == sobrenome));


  }

    
}



