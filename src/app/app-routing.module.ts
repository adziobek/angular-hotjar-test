import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {StudentListComponent} from './student-list/student-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LogoutComponent} from './logout/logout.component';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
