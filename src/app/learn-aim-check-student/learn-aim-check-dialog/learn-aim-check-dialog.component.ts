import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {LearnAimCheck} from '../../interfaces/learn-aim-check';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

interface DialogData {
  learnAimCheck: LearnAimCheck;
  dialogTitle: string;
  dialogDescription: string;
  stageName: string;
}

@Component({
  selector: 'app-learn-aim-check-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './learn-aim-check-dialog.component.html',
  styleUrl: './learn-aim-check-dialog.component.scss'
})
export class LearnAimCheckDialogComponent {

  updateForm = new FormGroup({
    comment: new FormControl('', [Validators.required, Validators.minLength(50)]),
    semester: new FormControl('', [Validators.required, Validators.min(1), Validators.max(8)])
  });

  constructor(
    public dialogRef: MatDialogRef<LearnAimCheckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onSave() {
    if (this.updateForm.valid) {
      this.dialogRef.close({
        comment: 'Test',
        semester: 2
      });
    }
  }

}
