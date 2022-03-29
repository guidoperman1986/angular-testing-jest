import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match with the snapshot', ()=>{
    expect(compiled).toMatchSnapshot();
  });

  test('should increase based on the argument', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  })

  test('should increase based on the argument when the button was pressed', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);
    
    buttons[1].click();
    expect(component.counter).toBe(10);
  })

  test('should change the counter and update the h1', () => {
    component.increaseBy(10);

    fixture.detectChanges();

    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');

  })  


});
