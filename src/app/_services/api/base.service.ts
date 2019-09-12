import { HttpErrorResponse } from "@angular/common/http";

declare let toastr: any;

export class BaseService {
    /**
     * Toastr for success messages
     * 
     * @param msg
     */
    public success(msg: string): void {
        toastr.success(msg);
    }

    /**
     * Toastr for error messages
     * 
     * @param msg
     */
    public error(msg: HttpErrorResponse): void {
        if (msg.error) {
            const errorMsgs = Object.values(msg.error.errors);
            errorMsgs.forEach((msg: string[]) => {
                toastr.error(msg.join("\n"));
            });
        } else {
            toastr.error(msg.message);
        }

    }
}