import { Component, isDevMode } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FestivofechaService } from '../../servicios/festivofecha.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-festivofecha',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
  ],
  templateUrl: './festivofecha.component.html',
  styleUrl: './festivofecha.component.css'
})
export class FestivofechaComponent {
    selectedDate: Date | null = null;
  
    constructor(private festivofechaService: FestivofechaService, private snackBar: MatSnackBar) {}
  
    onDateChange(date: Date | null) {
      this.selectedDate = date;
    }
  
    validarFecha() {
      if (this.selectedDate) {
        const anio: number = this.selectedDate.getFullYear();
        const mes: number = this.selectedDate.getMonth() + 1; 
        const dia: number = this.selectedDate.getDate();
        
        this.festivofechaService.festivo(anio, mes, dia).subscribe(
          (response: string) => {
            Swal.fire({
                title: response,
                icon: 'info',
                confirmButtonText: 'Cerrar'
              });
          },
          (error: any) => {
            Swal.fire({
                title: 'Error',
                text: 'Error al verificar la fecha',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              });   
          }
        );
      } else {
        Swal.fire({
            title: 'Atención',
            text: 'Seleccione una fecha primero',
            icon: 'warning',
            confirmButtonText: 'Cerrar'
          });
      }
    }
  }
