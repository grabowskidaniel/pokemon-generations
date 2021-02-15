import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './notification.service';


describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot({
          maxOpened: 1,
          preventDuplicates: true
        })
      ]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
