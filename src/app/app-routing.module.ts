import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceSelectorComponent } from './components/province-selector/province-selector.component';

const routes: Routes = [
  { path: 'province-selector', component: ProvinceSelectorComponent },
  { path: 'price-list/:id', component: ProvinceSelectorComponent },
  { path: '', redirectTo: '/province-selector', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
