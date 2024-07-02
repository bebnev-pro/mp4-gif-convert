import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoList } from '../types/video-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-example.component.html',
  styleUrl: './video-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoExampleComponent {
 @Input() videoUrl: string = '';

 public getConvertedName(str: string): string {
   return str.substring(str.lastIndexOf('/') + 1);
 }
}
