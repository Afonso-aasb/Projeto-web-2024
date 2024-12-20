import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BuscaComponent } from './busca/busca.component';
import { LoginComponent } from './login/login.component';
import { CestaComponent } from './cesta/cesta.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    {path:"cliente", component:ClienteComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent},
    {path:"detalhe", component:DetalheComponent},
    {path:"login", component:LoginComponent},
    {path:"busca", component:BuscaComponent},
    {path:"cesta", component:CestaComponent},
    {path:"esqueci", component:EsqueciComponent},
    {path:"cadastro", component: CadastroComponent}
];

@NgModule({   imports: [RouterModule.forRoot(routes)],   exports: [RouterModule] })export class AppRoutingModule {}