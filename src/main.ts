import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'; // Import necessário
import { provideRouter } from '@angular/router';
import { RelatoriosComponent } from './app/relatorios/relatorios.component';


bootstrapApplication(RelatoriosComponent, {
  providers: [
    provideAnimations(),
    provideRouter([
      { path: '', redirectTo: 'relatorios', pathMatch: 'full' }, // Redireciona a raiz para "relatorios"
      { path: 'relatorios', component: RelatoriosComponent },
      { path: '**', redirectTo: 'relatorios' }, // Redireciona qualquer rota inválida
    ]),
  ],
}).catch(err => console.error(err));
