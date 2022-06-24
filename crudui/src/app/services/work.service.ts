import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Work } from "../work";

@Injectable({
  providedIn: "root",
})
export class WorkService {
  work: Work;
  selectedWork: Work;
  works: Work[];
  readonly URL_API = "http://localhost:8081/getworklist";
  constructor(private http: HttpClient) {
    this.selectedWork = new Work();
  }

  // postReserv(work: Work) {
  //   console.log(work);
  //   return this.http.post(this.URL_API, work);
  // }

  getWorks() {
    return this.http.get<Work[]>(this.URL_API);
  }

}