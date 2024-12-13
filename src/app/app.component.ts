import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DelayDemoComponent } from "./delay-demo/delay-demo.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf, DelayDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj';
}
