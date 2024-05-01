import {Component, Input, SimpleChanges} from '@angular/core';
import {LearnAim} from '../../interfaces/learn-aim';
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {NgForOf, NgIf} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';
import {LearnAimCheck} from '../../interfaces/learn-aim-check';

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
    NgIf
  ],
  templateUrl: './learn-aim.component.html',
  styleUrl: './learn-aim.component.scss'
})
export class LearnAimComponent {

  @Input({required: true}) learnAim!: LearnAim;
  isFirstStagePresent = false;
  isSecondStagePresent = false;
  isThirdStagePresent = false;
  isFirstStageApproved = false;
  isSecondStageApproved = false;
  isThirdStageApproved = false;

  firstStageColor = 'warn';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['learnAim'].currentValue) {
      this.setStageInfos(changes['learnAim'].currentValue.checked);
    }
  }

  setStageInfos(checks: LearnAimCheck[]) {
    checks.forEach((check) => {
      if (check.closeStage === 1) {
        this.isFirstStagePresent = true;
        this.isFirstStageApproved = check.isApproved;
      } else if (check.closeStage === 2) {
        this.isSecondStagePresent = true;
        this.isSecondStageApproved = check.isApproved;
      } else if (check.closeStage === 3) {
        this.isThirdStagePresent = true;
        this.isThirdStageApproved = check.isApproved;
      }
    });

    console.log(this.isFirstStagePresent);
    console.log(this.isFirstStageApproved);
  }
}
