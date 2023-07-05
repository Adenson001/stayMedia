
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.activeAccordionItem = 0;
  }
  activeAccordionItem: number | null = 0;
  // sectiontitle: string = '';
  // sectiontext: string = '';

  accordionList = [
    {
      title: 'Is this UI/UX bootcamp 100% online?',
      content: `Yes. All of Springboard’s courses are 100% online. 
        That means you can learn in your space at your pace anytime, day or night. 
        And just because you are learning online, doesn’t mean you are learning alone. 
        With Springboard, you get a team committed to your success — one-on-one expert 
        guidance from a mentor, a career coach to support you in landing the job you want, 
        and a student advisor to help you navigate the ins and outs of the course. Plus, you’ll build
        connections with other ambitious students, just like you, who will be growing alongside and helping 
        support you every step of the way. `,
    },

    {
      title: 'What is this course for?',
      content: ` is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `,
    },

    {
      title: 'How long does this training takes?',
      content: `It is a long established fact that a reader will be distracted by 
      the readable content of a page when looking at its layout. The point of using Lorem 
      Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
       using 'Content here, `,
    },
    {
      title: 'what is included in the tution?',
      content: `There are many variations of passages of Lorem Ipsum available, 
      but the majority have suffered alteration in some form, 
      by injected humour, or randomised words which don't look even slightly believable. `,
    },
    {
      title: 'what kind of support can i expect?',
      content: `"On the other hand, we denounce with righteous 
      indignation and dislike men who are so beguiled and demoralized by 
      the charms of pleasure of the moment, so blinded by desire, that they 
      cannot foresee the pain and trouble that are bound to ensue; and equal 
      blame belongs to those who fail in their duty through weakness of will,
       which is the same as saying through shrinking from toil and pain. `,
    },
  ];

  toggleAccordion(index: number): void {
    if (this.activeAccordionItem === index) {
      this.activeAccordionItem = null;
    } else {
      this.activeAccordionItem = index;
    }
  }

  getContentHeight(index: number): number {
    if (index === this.activeAccordionItem) {
      const accordionItemBody = this.elementRef.nativeElement.querySelectorAll(
        '.accordion-item-body'
      )[index];
      const contentHeight = accordionItemBody.querySelector(
        '.accordion-item-body-content'
      ).offsetHeight;
      return contentHeight;
    } else {
      return 0;
    }
  }
}
