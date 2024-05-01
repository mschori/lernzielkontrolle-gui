import {Component, Input} from '@angular/core';
import {ActionCompetence} from '../../interfaces/action-competence';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {LearnAimComponent} from '../learn-aim/learn-aim.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-action-competence',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatIcon,
    LearnAimComponent,
    NgForOf
  ],
  templateUrl: './action-competence.component.html',
  styleUrl: './action-competence.component.scss'
})
export class ActionCompetenceComponent {

  @Input({required: true}) actionCompetence!: ActionCompetence;

  constructor() {
  }
}
