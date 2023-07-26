import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';


  constructor(private dialogRef: MatDialogRef<DialogAddPlayerComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
