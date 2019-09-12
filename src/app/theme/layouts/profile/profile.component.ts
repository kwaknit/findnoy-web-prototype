import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiHandlerService } from '../../../_services/api-handler.service';

declare let mApp: any;
declare let toastr: any;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    form: FormGroup;
    user: any;
    role: string;
    team: string
    isPassMatch: boolean = true;

    constructor(
        private fb: FormBuilder,
        private api: ApiHandlerService) {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
        this.role = this.user.role.name;

        if (this.user.team) this.team = this.user.team.name;
    }

    ngOnInit() {
        this.form = this.fb.group({
            id: [this.user.id],
            first_name: [this.user.first_name],
            middle_name: [this.user.middle_name],
            last_name: [this.user.last_name],
            password: null
        });
    }

    validatePassword(pass: string): void {
        this.isPassMatch = pass === this.form.controls['password'].value;
    }

    // todo: onsubmit
}
