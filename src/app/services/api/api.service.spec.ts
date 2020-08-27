import { ApiService } from './api.service';
import { Response } from '../../logical/logical.services.module';

describe('Api Service', () => {

    let service: ApiService;

    beforeEach(() => {
        service = new ApiService(null);
    });

    it('Will call get on the http client', () => {
        const mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
        service = new ApiService(mockHttp);
        service.get('/Some website');
        expect(mockHttp.get).toHaveBeenCalled();
    });

    it('Will call get with the url passed in', () => {
        const mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
        service = new ApiService(mockHttp);
        service.get('Specific website');
        expect(mockHttp.get).toHaveBeenCalledWith('Specific website');
    });

    it('Will return the Observable from the Http call wraped in a Response', () => {
        const mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
        service = new ApiService(mockHttp);
        expect(service.get<null>('something')).toEqual(jasmine.any(Response));
    });


});
