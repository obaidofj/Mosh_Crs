import { TestBed } from '@angular/core/testing';
import { AuthorsService } from './authors.service';
describe('AuthorsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthorsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authors.service.spec.js.map