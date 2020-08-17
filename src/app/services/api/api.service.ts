import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../logical/logical.services.module';

@Injectable()

export class ApiService {

    constructor(private http: HttpClient) {}

    get<T>(url: string): Response<T> {
        this.http.get(url);
        return new Response(null);
    }
}
