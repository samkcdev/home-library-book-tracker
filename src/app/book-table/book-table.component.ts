import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef
} from "@angular/core";
import { BookTable } from "../shared/book-table.model";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-table",
  templateUrl: "./book-table.component.html",
  styleUrls: ["./book-table.component.css"]
})
export class BookTableComponent implements OnInit, AfterViewInit {
  showForm = false;

  @ViewChild("bookname") bookname: ElementRef;
  @ViewChild("authorname") authorname: ElementRef;
  @ViewChild("readTrue") readTrue: ElementRef;
  @ViewChild("readFalse") readFalse: ElementRef;
  @ViewChild("rating") rating: ElementRef;
  tableData: BookTable[] = [];
  constructor(private bookservices: BookService) {}

  // @Output() showBookDetail = new EventEmitter<BookTable>();

  ngOnInit() {
    this.tableData = this.bookservices.getBookData();
  }
  ngAfterViewInit() {}

  onAddForm() {
    this.showForm = true;
  }

  addToTable() {
    const bookName = this.bookname.nativeElement.value;
    const authorName = this.authorname.nativeElement.value;
    const readTrue = this.readTrue.nativeElement.value;
    const readFalse = this.readFalse.nativeElement.value;
    const rating = this.rating.nativeElement.value;
    const formData = new BookTable(
      bookName,
      authorName,
      readTrue,
      readFalse,
      rating
    );
    this.bookservices.addNewBooks(formData);
  }
  onCancelForm() {
    this.showForm = !this.showForm;
  }

  onBookDetail(tableData: BookTable) {
    this.bookservices.bookDetails.emit(tableData);
  }
}
