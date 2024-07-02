import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoExampleComponent } from './video-example/video-example.component';
import { HttpService } from './services/http/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoExampleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpService],
})
export class AppComponent {
  constructor(public httpService: HttpService) {
  }
}
