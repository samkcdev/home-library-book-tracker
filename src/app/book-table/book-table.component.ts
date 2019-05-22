import { Component, OnInit } from "@angular/core";
import { BookTable } from "../shared/book-table.model";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-table",
  templateUrl: "./book-table.component.html",
  styleUrls: ["./book-table.component.css"]
})
export class BookTableComponent implements OnInit {
  showForm = false;

  tableData: BookTable[] = [];

  // @Output() showBookDetail = new EventEmitter<BookTable>();

  constructor(private bookservices: BookService) {}

  ngOnInit() {
    this.tableData = this.bookservices.getBookData();
  }

  onAddForm() {
    this.showForm = true;
  }
  onCancelForm() {
    this.showForm = !this.showForm;
  }

  onBookDetail(tableData: BookTable) {
    this.bookservices.bookDetails.emit(tableData);
  }
}
