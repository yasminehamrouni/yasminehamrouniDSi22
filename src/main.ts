import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { AccueilComponent } from './app/accueil/accueil.component';
import { ConnexionComponent } from './app/connexion/connexion.component';
import { InscriptionComponent } from './app/inscription/inscription.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter([
      { path: '', component: AccueilComponent },
      { path: 'connexion', component: ConnexionComponent },
      { path: 'inscription', component: InscriptionComponent },
    ])
  ]
});
