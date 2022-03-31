import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../services/pokemon.service';

import { CharizardComponent } from './charizard.component';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compile: HTMLElement;
  let httpMock: HttpTestingController;
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ CharizardComponent ],
      providers: [
        PokemonService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    compile = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match the snapshot', ()=>{
    expect(compile.innerHTML).toMatchSnapshot();
  })

  test('should show loading at the begining', () => {
    const h2 = compile.querySelector('h2')
    expect(h2?.textContent).toEqual('Loading...')
  })

  test('should load charizardo inmidiatly', ()=>{
    const mockPockemon = {
      name: 'charizardo',
      sprites: {
        front_default: 'https://charizard.com/sprite.png'
      }
    }

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');

    request.flush(mockPockemon);
    fixture.detectChanges();

    const h3 = compile.querySelector('h3');
    const img = compile.querySelector('img');

    expect(h3?.textContent?.toLowerCase()).toContain(mockPockemon.name.toLowerCase())
    expect(img?.src).toContain(mockPockemon.sprites.front_default)
    expect(img?.alt).toContain(mockPockemon.name)


  })
});
