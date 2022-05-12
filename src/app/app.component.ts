import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

interface Link {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-testing';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav?.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this.cd.detectChanges();
  }

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
    {
      name: 'weather-rxjs',
      url: 'weather',
    },
    {
      name: 'Reusable dialog',
      url: 'dialog',
    },
  ];
}
