import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miPortfolio:any;
  isLogged = false;

  constructor (private router:Router, private tokenService: TokenService) { }
  //constructor (private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    //this.datosPortfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      //this.miPortfolio=data;
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged = false;
      }
    }

    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
    }
  
    login(){
    this.router.navigate(['/login'])
  }
}



