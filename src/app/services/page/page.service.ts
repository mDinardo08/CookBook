import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class PageService {

    constructor(private api: ApiService) {

    }
}
