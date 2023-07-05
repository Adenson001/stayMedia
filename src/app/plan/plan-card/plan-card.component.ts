import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css'],
})
export class PlanCardComponent {
  @Input()
  plan!: { label: string; features: string[]; apply: string; };
}
