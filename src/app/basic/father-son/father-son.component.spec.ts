import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FatherSonComponent } from './father-son.component';


describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  })

  test('should not appear buttons if there is no client', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  })  

  test('should appear two buttons if there is client', () => {
    component.client = {id: 1, name: 'Juan'};

    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  })

  test('should emit onDeleteClient when delete button was pressed', ()=>{
    component.client = {id: 1, name: 'Juan'};
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');
    
    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();

  })

  test('should emit onClientUpdated when change button was pressed', ()=>{
    component.client = {id: 1, name: 'Juan'};
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdated, 'emit');
    
    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({id: 5, name: 'Juan'});

  })

  test('should emit onChangeClient with id if client exists', () => {
    jest.spyOn(component.onClientUpdated, 'emit');    
    component.onChange(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();
    
    component.client = {id: 1, name: 'Juan'};
    fixture.detectChanges();
    component.onChange(10);
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({id: 10, name: 'Juan'});
  })



});



