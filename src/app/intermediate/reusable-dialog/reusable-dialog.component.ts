import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.css'],
})
export class ReusableDialogComponent implements OnInit {
  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {}

  yesNoDialog() {
    this.utilityService.confirmDialog({
      title: 'Title',
      message: 'Are you sure you want to do this?',
      confirmText: 'Yes',
      cancelText: 'No',
    });
  }

  confirmCancel() {
    this.utilityService.confirmDialog({
      title: 'Please confirm action',
      message: 'Please confirm whether you want to do this!',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
    });
  }

  yesNotSure() {
    this.utilityService.confirmDialog({
      title: 'Are you sure?',
      message: 'Are you sure you want to do this?',
      confirmText: 'Yes',
      cancelText: 'Not sure!',
    });
  }
}
