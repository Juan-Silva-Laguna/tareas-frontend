import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Input() datosNota: { id: number; nota: string; fecha: string } | null = null; 
  @Output() notaNueva: EventEmitter<string> = new EventEmitter();
  @Output() notaActualizada = new EventEmitter<{ id: number; nota: string; fecha: string }>();  // Emite la nota actualizada
  nota: string = '';

  ngOnChanges() {
    if (this.datosNota) {
      this.nota = this.datosNota.nota;
    }
  }

  agregar(event: Event) {
    event.preventDefault();
    if (this.nota == '') {
      alert('Por favor ingrese contenido en el campo de texto')
      return;
    }

    if (this.datosNota) {
      this.notaActualizada.emit({
        id: this.datosNota.id,
        nota: this.nota,
        fecha: this.tiempoActual()  // Actualiza la fecha actual si deseas
      });
    } else {
      this.notaNueva.emit(this.nota);
    }
    this.nota = '';  // Limpia el campo
  }

  tiempoActual(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  
}
