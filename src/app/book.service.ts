import { EventEmitter } from "@angular/core";
import { BookTable } from "./shared/book-table.model";

export class BookService {
  bookDetails = new EventEmitter<BookTable>();
  tableData: BookTable[] = [
    new BookTable("God of Small Things", "Arundhathi Roy", "Yes", 4.5),
    new BookTable("Animal Farm", "George Orwell", "Yes", 5),
    new BookTable("Something Fresh", "P.G.Wodehouse", "Yes", 4.5),
    new BookTable("Glass Palace", "Amitav Ghosh", "No", 0),
    new BookTable("Something Fresh", "P.G.Wodehouse", "Yes", 5)
  ];
  getBookData() {
    return this.tableData;
  }
  addNewBooks(newBooks: BookTable) {
    this.tableData.push(newBooks);
  }
}
