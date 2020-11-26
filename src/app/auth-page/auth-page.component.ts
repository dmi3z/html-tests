import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-page',
    templateUrl: 'auth-page.component.html',
    styleUrls: ['auth-page.component.scss']
})

export class AuthPageComponent implements OnInit {

    public user: FormControl;
    public password: FormControl;
    public userForm: FormGroup;

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.createFormFields();
        this.createForm();
    }

    private createFormFields(): void {
        this.user = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60), Validators.pattern(/[a-zа-я ]+/gmi)]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]);
    }

    private createForm(): void {
        this.userForm = new FormGroup({
            user: this.user,
            password: this.password
        });
    }

    public login(): void {
        if (this.userForm.valid) {
            if (this.password.value === 'po51tests') {
                this.dataService.user = this.user.value;
                this.router.navigate(['test']);
            }
            if (this.password.value === 'adminpass' && this.user.value === 'admin') {
                this.dataService.user = this.user.value;
                this.dataService.isAdminPassword = true;
                this.router.navigate(['admin']);
            }
        }
    }

}
