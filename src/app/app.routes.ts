import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { BodyComponent } from './components/body/body.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RestaComponent } from './pages/resta/resta.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';


export const routes: Routes = [
    {path: 'suma', title: 'Operación suma', component: SumaComponent},
    {path: 'resta', title: 'Operación resta', component: RestaComponent},
    {path: 'acercade', title: 'Acerca de...', component: AcercadeComponent},
];
