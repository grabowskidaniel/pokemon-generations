import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { GenerationNamePipe } from 'src/app/shared/pipes/generation-name/generation-name.pipe';
import { TitleCaseDashedNamePipe } from 'src/app/shared/pipes/titlecase-dashed-name/titlecase-dashed-name.pipe';
import { RegionsComponent } from './regions.component';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule,
        ToastrModule.forRoot({
          maxOpened: 1,
          preventDuplicates: true
        })
      ],
      declarations: [ RegionsComponent],
      providers: [TitleCasePipe, UpperCasePipe, TitleCaseDashedNamePipe, GenerationNamePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
