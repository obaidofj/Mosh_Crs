import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
export class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    getAll() {
        return this.http.get(this.url).pipe(catchError(this.handelError), map((response) => response.json()));
    }
    create(resource) {
        //return throwError(new NotFoundError());
        return this.http.post(this.url, JSON.stringify(resource)).pipe(catchError(this.handelError), map((response) => response.json()));
    }
    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({ title: 'updated' }))
            .pipe(catchError(this.handelError), map((response) => response.json()));
    }
    delete(id) {
        //return throwError(new AppError());
        return this.http.delete(this.url + '/' + id).pipe(catchError(this.handelError), map((response) => response.json()));
    }
    handelError(error) {
        if (error.status === 400)
            return throwError(new BadInput(error.json()));
        if (error.status === 404)
            return throwError(new NotFoundError());
        return throwError(new AppError(error));
    }
}
//# sourceMappingURL=data.service.js.map