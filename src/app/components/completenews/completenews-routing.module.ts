import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletenewsComponent } from './completenews.component';

const routes: Routes = [
  {
    path: '',
    component: CompletenewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletenewsRoutingModule {}
