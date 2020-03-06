import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPageComponent } from './test-page/test-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
import { CompletePageComponent } from './complete-page/complete-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './services/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    TestPageComponent,
    CompletePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AuthPageComponent
      },
      {
        path: 'test',
        component: TestPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'complete',
        component: CompletePageComponent
      },
      {
        path: 'admin',
        component: AdminPageComponent,
        canActivate: [AdminGuard]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
