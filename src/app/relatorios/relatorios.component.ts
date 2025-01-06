import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  displayedColumns: string[] = ['data', 'modelo', 'km', 'cliente', 'telefone', 'devolucao', 'pago', 'valor'];
  dataSource = [
    { data: '30/09/2024', modelo: 'UNO', km: 50000, cliente: 'Jorge Amado Santos', telefone: '(99) 98109-2912', devolucao: '30/09/2024', pago: true, valor: 250 },
    { data: '30/09/2024', modelo: 'PALIO', km: 80000, cliente: 'Jorge Amado Santos', telefone: '(99) 98109-2912', devolucao: '30/09/2024', pago: false, valor: 200 },
    // Adicione mais dados
  ];

  get totalDebitos(): number {
    return this.dataSource.filter(item => !item.pago).reduce((acc, curr) => acc + curr.valor, 0);
  }
}
