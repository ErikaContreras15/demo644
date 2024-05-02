import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Demostracion UPS';
  user = 'Erika'
}
