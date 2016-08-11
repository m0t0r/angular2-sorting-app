import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { AppComponent } from './app.component';
import { SortingModule } from './sorting/sorting.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdTabsModule,
    MdButtonModule,
    SortingModule,
    MdIconModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
