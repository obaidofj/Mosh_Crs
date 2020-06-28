import { AppErrorHandler } from './../common/app-error-handler';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';

export class DataService {
  constructor(private url: string, private http: Http) {}

  getAll() {
    return this.http.get(this.url).pipe(
      catchError(this.handelError),
      map((response) => response.json())
    );
  }

  create(resource) {
    // return throwError(new NotFoundError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      catchError(this.handelError),
      map((response) => response.json())
    );
  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ title: 'updated' }))
      .pipe(
        catchError(this.handelError),
        map((response) => response.json())
      );
  }

  delete(id) {
    // return throwError(new AppError());
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handelError),
      map((response) => response.json())
    );
  }

  private handelError(error: Response) {
    if (error.status === 400) { return throwError(new BadInput(error.json())); }
    if (error.status === 404) { return throwError(new NotFoundError()); }
    return throwError(new AppError(error));
  }
}
