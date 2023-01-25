import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsComponent } from './star-wars.component';
import { Films } from '../../models/star-wars.model';
import { StarWarsService } from '../../services/star-wars/star-wars.service';

const mockStarWarsService = {}

describe('StarWarsComponent', () => {
  let component: StarWarsComponent;
  let fixture: ComponentFixture<StarWarsComponent>;
  let starWarsService: StarWarsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsComponent ],
      providers: [
        { provide: StarWarsService, useValue: mockStarWarsService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsComponent);
    component = fixture.componentInstance;
    starWarsService = TestBed.inject(StarWarsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should return if is Film', () => { 
    const film: Films = {characters: ['abc','def']} as Films;
    const result = component.isFilm(film)
    expect(result).toBeTruthy();
    
  })

  test('should return search message', ()=> {
    const searchMessage = component.searchMessage;
    expect(searchMessage).toEqual('Search for films')
  })

  test('should set an option', () => { 
    const spySubject = jest.spyOn(component.buttonChanged$, 'next');
    component.search.setValue('star wars')
    component.onSelectOption = 'films';
    
    expect(spySubject).toHaveBeenCalled();
    expect(spySubject).toHaveBeenCalledWith('star wars');

  })
});
