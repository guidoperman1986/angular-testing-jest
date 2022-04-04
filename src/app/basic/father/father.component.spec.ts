import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FatherSonComponent } from '../father-son/father-son.component';

import { FatherComponent } from './father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

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
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should show the client with the rigth name', () => {
    component.onSetClient('Roberto');
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');
    expect(codeDiv?.textContent).toContain('"name"');
    expect(codeDiv?.textContent).toContain('Roberto');
  })

  test('should delete the client if onDeleteClient is emitted', () => {
    component.client = {id: 1, name:'Roberto'};
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onDeleteClient.emit()
    expect(component.client).toBe(undefined);
  })

  test('should update the client', () => {
    component.client = {id: 1, name:'Roberto'};
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;

    sonComponent.onClientUpdated.emit({id: 10, name: 'Marcos'})
    expect(component.client).toEqual({id: 10, name: 'Marcos'});
  })


});
