import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent {

  colorCard= ['red', 'green', 'yellow', 'purple'];
  planCard = [
    {
      label: 'LITE PLAN',
      features: [
        'Specific training',
        'Career Advice',
        `Starter Pack [Material Guide]`,
        '-',
        '-',
        '-',
        '-',
        'Free Internship',
      ],
      apply: '',
    },

    {
      label: 'bEta PLAN',
      features: [
        'Full training',
        'Career Advice',
        `Starter Pack [Pen & Material Guide]`,
        'Portfolio Setup',
        '-',
        '-',
        '-',
        'Free Internship',
      ],
      apply: '',
    },

    {
      label: 'pro PLAN',
      features: [
        'Full training',
        'Career Advice',
        `Starter Pack [Tees,Pen & Material Guide]`,
        'Portfolio Setup',
        '-',
        'Certificate on completion',
        '-',
        'Free Internship',
      ],
      apply: '',
    },

    {
      label: 'pro max PLAN',
      features: [
        'Full training',
        'Career Advice',
        `Starter Pack [Tees, Mug, Pen, Notepad, Flash, Material Guide]`,
        'Portfolio Setup',
        'LinkedIn Optimization',
        'Certificate on completion',
        'Job Placement',
        'Free Internship',
      ],
      apply:''
    },
  ];
}
