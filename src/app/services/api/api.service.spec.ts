import { ApiService } from './api.service';

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

});
