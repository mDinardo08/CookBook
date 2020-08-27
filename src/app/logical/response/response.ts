import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export class Response<T> {

    message: Observable<T>;

    constructor(message: Observable<T>) {
        this.message = message;
    }

    respond(func: (dto: T) => void): void {
        this.message.subscribe(func);
    }
}
