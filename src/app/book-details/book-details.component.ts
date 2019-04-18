import { Component, OnInit, Input } from "@angular/core";
import { BookTable } from "../shared/book-table.model";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  @Input() sendingBookData: BookTable;
  constructor() {}

  ngOnInit() {}
}
