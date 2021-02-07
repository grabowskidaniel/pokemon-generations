import { TestBed } from '@angular/core/testing';
import { GenerationNamePipe } from './generation-name.pipe';
import { GenerationNamePipeModule } from './generation-name.pipe.module';

describe('GenerationNamePipe', () => {
  let generationNamePipe: GenerationNamePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationNamePipeModule],
      providers: [GenerationNamePipe]
    })
    .compileComponents();

    generationNamePipe = TestBed.inject(GenerationNamePipe);
  });

  it('create an instance', () => {
    expect(generationNamePipe).toBeDefined();
  });
});
