import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayMethodsComponent } from './array-methods.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArrayMethodsComponent', () => {
  let component: ArrayMethodsComponent;
  let fixture: ComponentFixture<ArrayMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ ArrayMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.array = [1,2,3,4,5,6,7];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return filtered array', ()=> {
    const array = component.getArrayFiltrado();
    expect(array.filter(ar => ar > 5).length).toBe(0)
  });


});
