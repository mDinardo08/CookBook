import { UserService } from './user.service';

describe ('User Service', () => {

    let service;

    it('Will create', () => {
        const mockService = jasmine.createSpyObj('PostService', ['post']);
        service = new UserService(mockService);
        expect(true);
    });

    it('Will call post', () => {
        const mockService = jasmine.createSpyObj('PostService', ['post']);
        service = new UserService(mockService);
        service.login(null, null);
        expect(mockService.post).toHaveBeenCalled();
    });
});
