import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AppComponent } from './app.component';
import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';
import { AF } from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from "@angular/router";
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'pessoa', component: CadastroPessoaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    CadastroPessoaModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
