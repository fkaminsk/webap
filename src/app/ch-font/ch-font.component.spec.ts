import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFontComponent } from './ch-font.component';

describe('ChFontComponent', () => {
  let component: ChFontComponent;
  let fixture: ComponentFixture<ChFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
