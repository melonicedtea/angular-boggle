import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoggleComponent } from './components/boggle/boggle.component';

const routes: Routes = [
  {path: '', component: BoggleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
