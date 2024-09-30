import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  @Input() notas: Array<{ id: number; nota: string; fecha: string, isExpanded?: boolean }> = []; 
  @Output() notaEditar = new EventEmitter<{ id: number; nota: string; fecha: string }>();

  eliminar(id: number) {
    this.notas = this.notas.filter(nota => nota.id !== id); 
  }

  editar(id: number) {
    this.notaEditar.emit(this.notas.find(nota => nota.id === id))
  }

  toggleExpand(nota: { id: number; nota: string; fecha: string, isExpanded?: boolean }) {
    nota.isExpanded = !nota.isExpanded;
  }
}
