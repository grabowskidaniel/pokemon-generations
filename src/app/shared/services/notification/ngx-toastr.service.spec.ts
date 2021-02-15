import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { NgxToastrService } from './ngx-toastr.service';


describe('NgxToastrService', () => {
  let service: NgxToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot({
          maxOpened: 1,
          preventDuplicates: true
        })
      ]
    });
    service = TestBed.inject(NgxToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
