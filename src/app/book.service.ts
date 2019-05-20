import { EventEmitter } from "@angular/core";
import { BookTable } from "./shared/book-table.model";

export class BookService {
  bookDetails = new EventEmitter<BookTable>();
  tableData: BookTable[] = [
    new BookTable(1, "God of Small Things", "Arundhathi Roy", true, 4.5),
    new BookTable(2, "Animal Farm", "George Orwell", true, 5),
    new BookTable(3, "Something Fresh", "P.G.Wodehouse", true, 4.5),
    new BookTable(4, "Glass Palace", "Amitav Ghosh", false, 0)
  ];
}
