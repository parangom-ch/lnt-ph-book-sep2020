import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './component/contacts.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/add', component: AddContactComponent, },
  { path: 'contacts/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
