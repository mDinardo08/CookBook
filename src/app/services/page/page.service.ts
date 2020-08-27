import { Injectable } from '@angular/core';
import { GetService } from '../api/api.service';

@Injectable()
export class PageService {

    constructor(private getService: GetService) {

    }
}
