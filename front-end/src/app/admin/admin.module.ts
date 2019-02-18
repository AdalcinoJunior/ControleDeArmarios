import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';

import { AdminComponent } from './admin.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ConfigComponent } from './config/config.component';
import { HistoricosComponent } from './historicos/historicos.component';
import { LoginComponent } from './login/login.component';
import { Interceptor } from './interceptors/interceptor.module';
import { AuthService } from './servicos/autenticacao.service';
import { GuardsService } from './guards/guards.service';
import { RefreshInterceptor } from './interceptors/refresh-interceptor.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosService } from './servicos/usuarios.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate:[GuardsService], children:[
    { path: '', canActivate:[GuardsService], component: ListagemComponent },
    { path: 'alocacoes', canActivate:[GuardsService], component: ListagemComponent },
    { path: 'configuraçoes', canActivate:[GuardsService], component: ConfigComponent},
    { path: 'historicos', canActivate:[GuardsService], component: HistoricosComponent}
  ]}
  ];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    RouterModule.forChild(routes),
    HttpClientModule,    
    ChartModule,
    CalendarModule,
    Interceptor,
    RefreshInterceptor,
    UsuariosModule
  ],
  declarations: [
    AdminComponent,
    ListagemComponent,
    ConfigComponent,
    HistoricosComponent,
    LoginComponent    
  ],
  providers: [AuthService, GuardsService, UsuariosService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
