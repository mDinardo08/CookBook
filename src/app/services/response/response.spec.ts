import { Response } from './response';
import { Observable } from 'rxjs';

describe('Response.ts', () => {
    let response: Response<void>;

    beforeEach(() => {
        response = new Response();
    });

    it('Will accept a observable', () => {
        response.waitOn(new Observable<void>());
    });
});
