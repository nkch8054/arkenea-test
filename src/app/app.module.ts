import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressStatusComponent } from './components/progress-status/progress-status.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialComponentsModule } from './material-components.module';


@NgModule({
  declarations: [
    AppComponent,
    DeleteDialogComponent,
    UserListComponent,
    ProgressStatusComponent,
    HeaderComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialComponentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
