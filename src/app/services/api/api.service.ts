import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiService {

    constructor(private http: HttpClient) {}

    get(url: string): void {
        this.http.get(url);
    }
}
