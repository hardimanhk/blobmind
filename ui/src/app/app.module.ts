import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlobContainerComponent } from './blob-container/blob-container.component';
import { ThoughtContainerComponent } from './thought-container/thought-container.component';
import { HeaderComponent } from './header/header.component';
import { BlobComponent } from './blob-container/blob/blob.component';

// angular material
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BlobDialogComponent } from './blob-container/blob-dialog/blob-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BlobContainerComponent,
    ThoughtContainerComponent,
    HeaderComponent,
    BlobComponent,
    BlobDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [
    BlobDialogComponent,
    BlobContainerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
