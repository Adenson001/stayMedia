import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.css'],
})
export class MentorCardComponent {
  @Input() profileUrl: string = '';
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() proffession: string = '';
  @Input() logoUrl: string = '';
}
