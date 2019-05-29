import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BookTableComponent } from "./book-table/book-table.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookService } from "./book.service";
import { BookTrackerServerService } from "./booktracker.server.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent, BookTableComponent, BookDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [BookService, BookTrackerServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
