import { Router } from '@angular/router';
import { environment } from './../../environments/environment.development';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(
    private router: Router
  ){}

  ngOnInit()
  {
    if(environment.token == '')
    {
      //alert('Usuário deslogado, faça o login novamente')
      this.router.navigate(['/entrar'])
    }
  }

}
