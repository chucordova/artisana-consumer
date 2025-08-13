import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // IMPORTANTE: router-outlet necesita esto
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // CORRECTO: styleUrls en plural
})
export class AppComponent implements OnInit {

  title = 'artisana';

  ngOnInit(): void {

    initializeFaro({
      url: 'https://faro-collector-prod-us-west-0.grafana.net/collect/ae343da272d3a2d5766685b60487920d',
      app: {
        name: 'artisana',
        version: '1.0.0',
        environment: 'production'
      },

      instrumentations: [
        // Mandatory, omits default instrumentations otherwise.
        ...getWebInstrumentations(),

        // Tracing package to get end-to-end visibility for HTTP requests.
        new TracingInstrumentation(),
      ],
    });

  }

}
