import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReqresData } from '../../models/reqres';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
})
export class NgTemplateComponent implements OnInit {
  reqResResponse$!: Observable<ReqresData[]>;
  reqResResponse!: ReqresData[];

  constructor(private reqRes: ReqresService) {}

  ngOnInit(): void {
    this.reqRes
      .getRequest(2)
      .pipe(map((data) => data.data))
      .subscribe((data) => (this.reqResResponse = data));
  }
}
