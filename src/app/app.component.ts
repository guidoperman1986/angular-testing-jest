import { Component } from '@angular/core';

interface Link {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing';

  links: Link[] = [
    {
      name: 'Counter',
      url: 'basic/counter',
    },
    {
      name: 'Counter with Init Value',
      url: 'basic/counter/10',
    },
    {
      name: 'Calling REST API',
      url: 'basic/charizard',
    },
    {
      name: 'Father',
      url: 'basic/father',
    },
    {
      name: 'Search',
      url: 'intermediate/search',
    },
    {
      name: 'Todos',
      url: 'todos',
    },
    {
      name: 'ValueAccessor',
      url: 'controlvalueaccessor',
    },
    {
      name: 'Directives',
      url: 'directive-example',
    },
    {
      name: 'Star Wars',
      url: 'star-wars',
    },
    {
      name: 'Clarity',
      url: 'clarity',
    },
    {
      name: 'ng-content',
      url: 'ng-content',
    },
    {
      name: 'content-child',
      url: 'ng-content/content-child',
    },
  ];
}
