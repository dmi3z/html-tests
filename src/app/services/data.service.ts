import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, UserAnswer } from '../test-page/question';

@Injectable({ providedIn: 'root' })

export class DataService {

    private _user: string;

    public total: number;

    private readonly BASE_URL = 'https://html-tests-node.herokuapp.com/';

    constructor(private http: HttpClient) { }

    public get isLogin(): boolean {
        return !!this._user;
    }

    public get user(): string {
        return this._user;
    }

    public set user(value: string) {
        this._user = value;
    }

    getQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>(this.BASE_URL.concat('questions'));
    }

    saveResult(result: UserAnswer): void {
        this.http.post(this.BASE_URL.concat('result'), result).toPromise();
    }
}
