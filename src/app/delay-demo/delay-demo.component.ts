import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-delay-demo',
  templateUrl: './delay-demo.component.html',
  styleUrls: ['./delay-demo.component.css'],
  imports:[NgIf]
})
export class DelayDemoComponent implements OnInit {
  delayedMessage: string = '';
  isLoading: boolean = false;
  delayTime: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  showDelayedMessage() {
    this.isLoading = true;
    const startTime = Date.now();
    this.http.get<{ message: string }>('http://localhost:3000/delay').subscribe(
      response => {
        this.delayTime = Date.now() - startTime;
        this.delayedMessage = `${response.message} (Response in ${this.delayTime} ms)`;
        this.isLoading = false;
      },
      err => {  
        console.error('Error:', err);
        this.isLoading = false;
      }
    );
  }
}