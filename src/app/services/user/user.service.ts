import { PostService } from '../api/api.service';

export class UserService {

    constructor(private postApi: PostService) {}

    login(username: string, password: string): void {
        this.postApi.post();
    }
}
