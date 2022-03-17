import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

import { FormsModule } from '@angular/forms'; 

//引入并且申明服务
import { StorageService } from './services/storage.service';
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
