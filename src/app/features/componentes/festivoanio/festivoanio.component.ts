import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FestivoanioService } from '../../servicios/festivoanio.service';

@Component({
  selector: 'app-festivoanio',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    NgxDatatableModule,
    FormsModule
  ],
  templateUrl: './festivoanio.component.html',
  styleUrl: './festivoanio.component.css'
})
export class FestivoanioComponent {
  public festivos: any[] = [];
   public columnas = [
     {name:"Festivo", prop:"nombre"},
     {name:"Fecha", prop:"fecha" },
   ];
   public anio?: number;

   constructor(private festivoAnioServicio: FestivoanioService) {}

   public listar() {
    if (this.anio) {
      this.festivoAnioServicio.listar(this.anio).subscribe({
        next: response => {
          this.festivos = [];
          response.forEach((item: any) => {
            this.festivos.push({
              nombre: item.nombre,
               dia: item.dia,
               mes: item.mes,
               fecha: `${this.anio}-${item.mes}-${item.dia}`
            });
          });
        },
        error: error => {
          window.alert(error.message);
        }
      });
    } else {
      window.alert('Por favor ingrese un año válido.');
    }
  }
}
