import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css'],
})
export class NgContentComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngAfterContentInit(): void {}

  ngOnInit(): void {}
}
