import { Component, OnInit } from "@angular/core";
import { BookTable } from "../shared/book-table.model";

@Component({
  selector: "app-book-table",
  templateUrl: "./book-table.component.html",
  styleUrls: ["./book-table.component.css"]
})
export class BookTableComponent implements OnInit {
  showForm = false;
  tableData: BookTable[] = [
    new BookTable(1, "God of Small Things", "Arundhathi Roy", true, 4.5),
    new BookTable(2, "Animal Farm", "George Orwell", true, 5),
    new BookTable(3, "Something Fresh", "P.G.Wodehouse", true, 4.5)
  ];

  constructor() {}

  ngOnInit() {}

  onAddForm() {
    this.showForm = true;
  }
  onCancelForm() {
    this.showForm = !this.showForm;
  }
}
