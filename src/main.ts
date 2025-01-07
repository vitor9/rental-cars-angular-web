import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RelatoriosComponent } from './app/relatorios/relatorios.component';


bootstrapApplication(RelatoriosComponent, {
  providers: [
    provideAnimations(),
    provideRouter([
      { path: '', redirectTo: 'relatorios', pathMatch: 'full' },
      { path: 'relatorios', component: RelatoriosComponent },
      { path: '**', redirectTo: 'relatorios' },
    ]),
  ],
}).catch(err => console.error(err));
