import { Injectable } from '@angular/core';
import { Response } from 'src/app/util/response/response';

@Injectable()
export class ResponseService {

    getResponse(): Response {
        return new Response();
    }
}
