import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { VentanaModalComponent } from './componentes/ventana-modal/ventana-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    VentanaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
