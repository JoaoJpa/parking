import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class ToastSystemService {

    defaultConfig = {
        position: 'bottom-center',
        showCloseButton: true,
        toastTimeout: 5000
    };

    configTopRigth = {
        showCloseButton: true,
        toastTimeout: 5000
    };

    constructor(private toastr: ToastrManager) { }

    public error(message: string) {
        this.toastr.errorToastr(message, 'Erro!', this.defaultConfig);
    }

    public success(message: string) {
        this.toastr.successToastr(message, 'Sucesso!', this.defaultConfig);
    }

    public successTopRigth(message: string) {
        this.toastr.successToastr(message, 'Sucesso!', this.configTopRigth);
    }

    public warning(message: string) {
        this.toastr.warningToastr(message, 'Atenção!', this.configTopRigth);
    }
}
