import { Component } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  expe: Experiencia[] = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  //miPortfolio:any;
  //constructor (private datosPortfolio:PortfolioService) { }

  //ngOnInit(): void {
   // this.datosPortfolio.obtenerDatos().subscribe(data =>{
    //  console.log(data);
     // this.miPortfolio=data;
    //});
  //}
}
