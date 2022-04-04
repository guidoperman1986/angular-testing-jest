import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FatherSonComponent } from '../father-son/father-son.component';

import { FatherComponent } from './father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FatherComponent,
        FatherSonComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
