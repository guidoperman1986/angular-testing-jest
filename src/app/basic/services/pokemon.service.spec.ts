import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should bring information from bulbasur', (done)=>{
    service.getPokemon(1).subscribe(pockemon=>{
      expect(pockemon.name).toBe('bulbasur')
    });

    done();
  });
});
