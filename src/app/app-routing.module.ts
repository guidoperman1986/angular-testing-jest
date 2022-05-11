import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './advanced/card-list/card-list.component';
import { NgContentComponent } from './advanced/ng-content/ng-content.component';
import { CharizardComponent } from './basic/charizard/charizard.component';
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';
import { CounterComponent } from './basic/counter/counter.component';
import { FatherComponent } from './basic/father/father.component';
import { ClarityComponent } from './clarity/clarity.component';
import { AccountValidationComponent } from './directives/account-validation/account-validation.component';
import { ExampleDirectiveComponent } from './directives/example-directive/example-directive.component';
import { ControlValueAccessorComponent } from './form/control-value-accessor/control-value-accessor.component';
import { SearchComponent } from './intermediate/search/search.component';
import { StarWarsComponent } from './intermediate/star-wars/star-wars.component';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent,
  },
  {
    path: 'basic/counter/:initial',
    component: CounterRouteComponent,
  },
  {
    path: 'basic/charizard',
    component: CharizardComponent,
  },
  {
    path: 'basic/father',
    component: FatherComponent,
  },
  {
    path: 'intermediate/search',
    component: SearchComponent,
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'controlvalueaccessor',
    component: ControlValueAccessorComponent,
  },
  {
    path: 'directive-example',
    component: ExampleDirectiveComponent,
  },
  {
    path: 'account-validation',
    component: AccountValidationComponent,
  },
  {
    path: 'star-wars',
    component: StarWarsComponent,
  },
  {
    path: 'clarity',
    component: ClarityComponent,
  },
  {
    path: 'ng-content',
    component: NgContentComponent,
  },
  {
    path: 'ng-content/content-child',
    component: CardListComponent,
  },
  {
    path: '**',
    redirectTo: 'basic/counter',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
