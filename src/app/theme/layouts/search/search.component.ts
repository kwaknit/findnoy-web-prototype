import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchForm: FormGroup;

    private searchParam: KeywordSearchParam = { q: '' };

    @Input() placeholder: string = 'Search';

    @Output() search = new EventEmitter<FormGroup>();

    constructor(
        private _fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.searchForm = this._fb.group(this.searchParam);
    }

    onSubmit(formData: FormGroup) {
        this.search.emit(formData);
    }

    onClearSearch() {
        this.searchForm.reset(this.searchParam);

        this.onSubmit(this.searchForm.value);
    }

}

export interface KeywordSearchParam {
    q: string;
}