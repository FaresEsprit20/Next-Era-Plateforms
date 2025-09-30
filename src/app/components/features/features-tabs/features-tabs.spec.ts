import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTabs } from './features-tabs';

describe('FeaturesTabs', () => {
  let component: FeaturesTabs;
  let fixture: ComponentFixture<FeaturesTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
