import { TestBed } from '@angular/core/testing';
import { TitleCaseDashedNamePipe } from './titlecase-dashed-name.pipe';
import { TitleCaseDashedNamePipeModule } from './titlecase-dashed-name.pipe.module';

describe('TitleCaseDashedNamePipe', () => {
  let titleCaseDashedNamePipe: TitleCaseDashedNamePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCaseDashedNamePipeModule],
      providers: [TitleCaseDashedNamePipe]
    })
    .compileComponents();

    titleCaseDashedNamePipe = TestBed.inject(TitleCaseDashedNamePipe);
  });

  it('create an instance', () => {
    expect(titleCaseDashedNamePipe).toBeDefined();
  });
});
