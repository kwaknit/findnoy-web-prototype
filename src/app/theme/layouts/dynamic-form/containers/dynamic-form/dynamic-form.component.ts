import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {
    @Input()
    title: string;

    @Input()
    config: any[] = [];

    @Input()
    data: any[];

    @Input()
    deleteBtnText: string;

    @Output()
    submitted: EventEmitter<FormGroup> = new EventEmitter();

    @Output()
    deleted: EventEmitter<number> = new EventEmitter();

    @Input()
    canDelete: boolean = true;

    @Input() questionCountValueChange: boolean = false;

    form: FormGroup;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.form = this.createGroup();

        if (this.data !== undefined) {
            this.setDetail();
        }

        this.onValueChange();
    }

    onValueChange() {
        if (this.questionCountValueChange) this.onQuestionCountValueChanges();
    }

    private onQuestionCountValueChanges() {
        this.form.get('QuestionCount').valueChanges.pipe(distinctUntilChanged())
            .subscribe(val => {
                const time: number = Math.ceil(0.6 * val);
                this.form.get('Time').setValue(time);
                this.form.get('Time').updateValueAndValidity();
            })
    }

    createGroup() {
        const group = this.fb.group({});
        this.config.forEach(control => group.addControl(control.name, this.fb.control(control.default, control.validators)));

        return group;
    }

    viewList() {
        const path = this.title === 'Edit' ? '../../' : '../';
        this.router.navigate([path], { relativeTo: this.activatedRoute });
    }

    onSubmit(form: any) {
        // clean form
        _.map(this.config, field => {
            if (field.type === 'number') {
                const control = String(form[field.name]);
                form[field.name] = +control.replace(/[^0-9.]/g, '');
            }
        });

        this.submitted.emit(form);
    }

    onDelete() {
        this.deleted.emit(this.data['id']);
    }

    private setDetail() {
        const detail = _.omit(this.data, ['deleted_at', 'updated_at']);

        setTimeout(() => {
            this.form.reset(detail);
        }, 0);
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
