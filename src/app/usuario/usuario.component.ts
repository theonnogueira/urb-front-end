import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit() {
    if(environment.token == '')
    {
      //alert('Usuário deslogado, faça o login novamente')
      this.router.navigate(['/entrar'])
    }
    
  }

}
