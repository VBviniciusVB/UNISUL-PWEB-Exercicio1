import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProdutosService } from './produtos.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';
import {PickListModule} from 'primeng/picklist';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [ProdutosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ButtonModule,
    CurrencyMaskModule
  ],
  providers: [
    ProdutosService
  ],
  exports:[
    ProdutosCadastroComponent
  ]
})
export class ProdutosModule { }
