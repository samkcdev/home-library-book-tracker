import { Component, OnInit } from "@angular/core";
import { BookTable } from "./shared/book-table.model";
import { BookService } from "./book.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  showOnload = true;
  bookData: BookTable;

  constructor(private bookservices: BookService) {}

  ngOnInit() {
    this.bookservices.bookDetails.subscribe((tableData: BookTable) => {
      this.bookData = tableData;
      this.showOnload = false;
    });
  }
}
