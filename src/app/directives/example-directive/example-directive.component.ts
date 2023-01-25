import { Component, OnInit, ViewChild } from '@angular/core';
import { AtributeDirective } from '../attribute.directive';
import { LoadingState, Person } from '../ifLoaded/if-loaded.directive';

@Component({
  selector: 'app-example-directive',
  templateUrl: './example-directive.component.html',
  styleUrls: ['./example-directive.component.css'],
})
export class ExampleDirectiveComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  condition = true;

  state: LoadingState<Person> = {
    type: 'loading'
  }

  constructor() {
    setTimeout(()=>{
      this.state = {
        type: 'loaded',
        data: {
          name: 'Guido',
        }
      }
    }, 3000)
  }

  ngOnInit(): void {}

  @ViewChild(AtributeDirective)
  highlighted!: AtributeDirective;

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }
}
