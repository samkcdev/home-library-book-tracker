import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef
} from "@angular/core";
import { BookTable } from "../shared/book-table.model";
import { BookService } from "../book.service";
import { BookTrackerServerService } from "../booktracker.server.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-book-table",
  templateUrl: "./book-table.component.html",
  styleUrls: ["./book-table.component.css"]
})
export class BookTableComponent implements OnInit, AfterViewInit {
  @ViewChild("form") addBookForm: NgForm;

  showForm = false;
  readVals: any = ["Yes", "No"];
  optionsFirst = this.readVals[0];

  onReadValChanges(value) {
    // this.optionVal = value;
    // console.log((this.optionVal = value));
  }

  @ViewChild("bookname") bookname: ElementRef;
  @ViewChild("authorname") authorname: ElementRef;
  @ViewChild("readTrue") readTrue: ElementRef;
  @ViewChild("readFalse") readFalse: ElementRef;
  @ViewChild("rating") rating: ElementRef;
  tableData: BookTable[] = [];
  constructor(
    private bookservices: BookService,
    private booktrackerDataservice: BookTrackerServerService
  ) {}

  // @Output() showBookDetail = new EventEmitter<BookTable>();

  ngOnInit() {
    this.tableData = this.bookservices.getBookData();
  }
  ngAfterViewInit() {}

  onAddForm() {
    this.showForm = true;
  }

  addToTable() {
    // const bookName = this.bookname.nativeElement.value;
    // const authorName = this.authorname.nativeElement.value;
    // // const readOrnot = this.optionVal;
    // const rating = this.rating.nativeElement.value;
    // const formData = new BookTable(bookName, authorName, readOrnot, rating);
    // this.booktrackerDataservice
    //   .storeBooks(this.tableData)
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   );
  }

  testform() {
    console.log(this.addBookForm);
  }
  onCancelForm() {
    this.showForm = !this.showForm;
  }

  onBookDetail(tableData: BookTable) {
    this.bookservices.bookDetails.emit(tableData);
  }
}
