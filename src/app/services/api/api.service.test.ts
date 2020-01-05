import { ApiService } from './api.service';

describe('Api Service', () => {

    let service: ApiService;

    beforeEach(() => {
        service = new ApiService(null);
    });

    it('Will call get on the http client', () => {
        const mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
        service = new ApiService(mockHttp);
        service.get("/Some website");
        expect(mockHttp.get).toHaveBeenCalled();
    });

});
