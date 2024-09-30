import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  notas: Array<{ id: number; nota: string; fecha: string }> = [];  
  datosNota: { id: number; nota: string; fecha: string } | null = null;
  agregar(nota: string) {
    const datos_nota = {
      id: this.notas.length,  // 'length' estaba mal escrito
      nota: nota,
      fecha: this.tiempoActual()
    };
    this.notas.push(datos_nota);  // Agrega la nueva nota al arreglo
  }

  actualizar(datos: { id: number; nota: string; fecha: string }) {
    const index = this.notas.findIndex(nota => nota.id === datos.id);
    if (index !== -1) {
      this.notas[index] = { ...datos };
    }
    this.datosNota = null
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

  editar(datos: { id: number; nota: string; fecha: string }){
    this.datosNota = datos
  }
}
