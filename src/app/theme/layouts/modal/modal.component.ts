import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() modalID: string;
    @Input() header: string;

    @Output() cancel = new EventEmitter<void>();
    @Output() add = new EventEmitter<void>();
    @Output() addAndClose = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }

}
