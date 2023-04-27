import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelo/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  miPortfolio:any;
  /*estoy agregando esto*/
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService, private datosPortfolio:PortfolioService) { }
  //constructor (private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }
}
