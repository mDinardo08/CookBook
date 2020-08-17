import { Response } from '../../logical/response/response';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

describe('Response', () => {

    let service;

    beforeEach(() => {
        service = new Response(null);
    });

    it('Will create', () => {
        service = new Response(null);
        expect(true).toBeTruthy();
    });

    it('Will call subscribe on the observable', () => {
        const o = of(null);
        spyOn(o, 'subscribe');
        service = new Response(o);
        service.respond();
        expect(o.subscribe).toHaveBeenCalled();
    });

    it('Will pass the lambda function onto the subscribe call', () => {
        const o = of(null);
        spyOn(o, 'subscribe');
        service = new Response(o);
        const func = () => 0;
        service.respond(func);
        expect(o.subscribe).toHaveBeenCalledWith(func);
    });
});
