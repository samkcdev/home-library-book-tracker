import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()
export class BookTrackerServerService {
  constructor(private http: Http) {}
  storeBooks(books: any[]) {
    return this.http.post(
      "https://angular-book-tracker.firebaseio.com/bookData.json",
      books
    );
  }
}
