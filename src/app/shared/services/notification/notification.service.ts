import { Injectable } from '@angular/core';
import { NgxToastrService } from './ngx-toastr.service';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private ngxToastrService: NgxToastrService) {}

  success(notification: Notification): void {
    this.ngxToastrService.show(notification, 'toast-success');
  }

  error(notification: Notification): void {
    this.ngxToastrService.show(notification, 'toast-error');
  }

  warning(notification: Notification): void {
    this.ngxToastrService.show(notification, 'toast-warning');
  }

  info(notification: Notification): void {
    this.ngxToastrService.show(notification, 'toast-info');
  }
}
