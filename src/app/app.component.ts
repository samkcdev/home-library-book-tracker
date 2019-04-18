import { Component } from "@angular/core";
import { BookTable } from "./shared/book-table.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  bookData: BookTable[];

  bookFromtable(bookDatas) {
    this.bookData = bookDatas;
  }
}
