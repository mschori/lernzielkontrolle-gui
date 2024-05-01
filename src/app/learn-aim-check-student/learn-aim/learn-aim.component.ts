import {Component, Input, SimpleChanges} from '@angular/core';
import {LearnAim} from '../../interfaces/learn-aim';
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {NgForOf, NgIf} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';
import {LearnAimCheck} from '../../interfaces/learn-aim-check';
import {MatDivider} from '@angular/material/divider';
import {LearnAimCheckComponent} from '../learn-aim-check/learn-aim-check.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-learn-aim',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIcon,
    MatChipSet,
    MatChip,
    NgForOf,
    MatTooltip,
    NgIf,
    MatDivider,
    LearnAimCheckComponent,
    MatButton
  ],
  templateUrl: './learn-aim.component.html',
  styleUrl: './learn-aim.component.scss'
})
export class LearnAimComponent {

  @Input({required: true}) learnAim!: LearnAim;
  firstStageColor = 'secondary';
  secondStageColor = 'secondary';
  thirdStageColor = 'secondary';
  canCrateNewCheck = true;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['learnAim'].currentValue) {
      this.setStageInfos(changes['learnAim'].currentValue.checked);
    }
  }

  /**
   * @name setStageInfos
   * @description This method sets the stage infos for the learn aim.
   * @param checks - The checks for the learn aim.
   */
  setStageInfos(checks: LearnAimCheck[]) {
    checks.forEach((check) => {
      if (check.closeStage === 1) {
        this.firstStageColor = check.isApproved ? 'success' : 'warning';
      } else if (check.closeStage === 2) {
        this.secondStageColor = check.isApproved ? 'success' : 'warning';
      } else if (check.closeStage === 3) {
        this.thirdStageColor = check.isApproved ? 'success' : 'warning';
      }
      this.canCrateNewCheck = check.isApproved;
    });
  }
}
