import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormsModule } from '@angular/forms';
import { MentorComponent } from './mentor/mentor.component';
import { MentorCardComponent } from './mentor/mentor-card/mentor-card.component';
import { SectionComponent } from './section/section.component';
import { PlanComponent } from './plan/plan.component';
import { PlanCardComponent } from './plan/plan-card/plan-card.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccordionComponent,
    MentorComponent,
    MentorCardComponent,
    SectionComponent,
    PlanComponent,
    PlanCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
