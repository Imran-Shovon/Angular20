import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedSingnal } from './linked-singnal';

describe('LinkedSingnal', () => {
  let component: LinkedSingnal;
  let fixture: ComponentFixture<LinkedSingnal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSingnal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedSingnal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
