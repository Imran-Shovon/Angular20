import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingnalExample } from './singnal-example';

describe('SingnalExample', () => {
  let component: SingnalExample;
  let fixture: ComponentFixture<SingnalExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingnalExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingnalExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
