import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class DataService {

    private _user: string;

    constructor() { }

    public get isLogin(): boolean {
        return !!this._user;
    }

    public get user(): string {
        return this._user;
    }

    public set user(value: string) {
        this._user = value;
    }
}
