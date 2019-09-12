import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() total: number;
    @Input() currentPage: number;
    @Input() from: number;
    @Input() to: number;
    @Input() showPagerInfo: boolean = true;
    @Input() isFixedHeight: boolean = false;
    @Input() hiddenRows: number = 0;
    @Input() pageSize = 10;

    @Output() paged = new EventEmitter<number>();

}
