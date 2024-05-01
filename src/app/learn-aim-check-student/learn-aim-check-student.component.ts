import {Component} from '@angular/core';
import {LearnAimCheckService} from '../services/learn-aim-check.service';
import {ActionCompetence} from '../interfaces/action-competence';
import {ActionCompetenceComponent} from './action-competence/action-competence.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-learn-aim-check-student',
  standalone: true,
  imports: [
    ActionCompetenceComponent,
    NgForOf
  ],
  templateUrl: './learn-aim-check-student.component.html',
  styleUrl: './learn-aim-check-student.component.scss'
})
export class LearnAimCheckStudentComponent {

  actionCompetences: ActionCompetence[] = [];

  constructor(private learnAimCheckService: LearnAimCheckService) {
    this.learnAimCheckService.getStudentLearnAimList().subscribe({
      next: (learnAimChecks) => {
        this.actionCompetences = learnAimChecks;
      },
      error: (error) => {
        console.log('Error from backend', error);
        // TODO - Get learn aims failed
      }
    });
  }

  logLearnAimList() {
    console.log(this.actionCompetences);
  }
}
