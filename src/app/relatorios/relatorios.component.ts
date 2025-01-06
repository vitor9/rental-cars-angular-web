import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RELATORIOS_DATA } from '../mocks/relatorios.mock';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';


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
    MatIconModule,
    MatSidenavModule,
    MatToolbar
  ],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  displayedColumns: string[] = ['data', 'modelo', 'km', 'cliente', 'telefone', 'devolucao', 'pago', 'valor'];
  dataSource = RELATORIOS_DATA;

  totalDebitos = this.dataSource
    .filter(item => !item.pago)
    .reduce((acc, item) => acc + item.valor, 0);

  }
