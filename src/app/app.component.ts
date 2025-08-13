import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // IMPORTANTE: router-outlet necesita esto
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // CORRECTO: styleUrls en plural
})
export class AppComponent {
  title = 'artisana';
}
