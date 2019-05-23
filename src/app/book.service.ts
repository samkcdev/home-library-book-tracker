import { EventEmitter } from "@angular/core";
import { BookTable } from "./shared/book-table.model";

export class BookService {
  bookDetails = new EventEmitter<BookTable>();
  tableData: BookTable[] = [
    new BookTable("God of Small Things", "Arundhathi Roy", true, 4.5),
    new BookTable("Animal Farm", "George Orwell", true, 5),
    new BookTable("Something Fresh", "P.G.Wodehouse", true, 4.5),
    new BookTable("Glass Palace", "Amitav Ghosh", false, 0),
    new BookTable("Something Fresh", "P.G.Wodehouse", true, 5)
  ];
  getBookData() {
    return this.tableData;
  }
  addNewBooks(newBooks: BookTable) {
    this.tableData.push(newBooks);
  }
}
