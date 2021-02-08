import { TestBed } from '@angular/core/testing';
import { TitleCaseDashedNamePipe } from './titlecase-dashed-name.pipe';

describe('TitleCaseDashedNamePipe', () => {
  let titleCaseDashedNamePipe: TitleCaseDashedNamePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCaseDashedNamePipe],
      providers: [TitleCaseDashedNamePipe]
    })
    .compileComponents();

    titleCaseDashedNamePipe = TestBed.inject(TitleCaseDashedNamePipe);
  });

  it('create an instance', () => {
    expect(titleCaseDashedNamePipe).toBeDefined();
  });
});
