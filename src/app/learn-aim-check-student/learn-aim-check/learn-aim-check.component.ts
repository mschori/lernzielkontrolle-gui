import {Component, Input, SimpleChanges} from '@angular/core';
import {LearnAimCheck} from '../../interfaces/learn-aim-check';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {DatePipe, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {LearnAimCheckDialogComponent} from '../learn-aim-check-dialog/learn-aim-check-dialog.component';
import {LearnAim} from '../../interfaces/learn-aim';

@Component({
  selector: 'app-learn-aim-check',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    NgIf,
    DatePipe,
    MatButton
  ],
  templateUrl: './learn-aim-check.component.html',
  styleUrl: './learn-aim-check.component.scss'
})
export class LearnAimCheckComponent {

  @Input({required: true}) learnAim!: LearnAim;
  @Input({required: true}) learnAimCheck!: LearnAimCheck;
  stageName = '';
  stageBadgeColor = 'secondary';

  constructor(public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['learnAimCheck'].currentValue) {
      let sn = '';
      switch (changes['learnAimCheck'].currentValue.closeStage) {
        case 1:
          sn = 'erklärt';
          break;
        case 2:
          sn = 'geübt';
          break;
        case 3:
          sn = 'selbstständig';
          break;
      }
      this.stageName = sn;
      this.stageBadgeColor = changes['learnAimCheck'].currentValue.isApproved ? 'success' : 'warning';
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(LearnAimCheckDialogComponent, {
      data: {
        learnAimCheck: this.learnAimCheck,
        dialogTitle: this.learnAim.name,
        dialogDescription: this.learnAim.description,
        stageName: this.stageName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
