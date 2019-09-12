

import { Directive, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appLabelsDirective]'
})
export class LabelsDirective implements AfterViewInit {

    constructor() { }

    ngAfterViewInit() {
        this.verifyInputsDisabled();
    }

    private verifyInputsDisabled() {
        document.addEventListener('DOMSubtreeModified', (el) => {
            const inputs: any = document.getElementsByClassName('form-control');
            for (const input of inputs) {
                this.verifyInput(input);
            }
        });
        this.alterInputFormGroup();
    }

    private verifyInput(element) {
        if (element.disabled) {
            element.labels.forEach(label => {
                label.style.background = 'linear-gradient(#fff 50%, #e9ecef 50%)';
            });
        } else {
            element.labels.forEach(label => {
                label.style.background = '#fff';
            });
        }
    }

    private alterInputFormGroup() {
        window.addEventListener('click', (e) => {
            const arrayLabels = document.getElementsByTagName('label');
            for (let i = 0; i < arrayLabels.length; i++) {
                arrayLabels.item(i).style.color = '#858585';
            }
            if ((e.target as any).nodeName === 'INPUT' || (e.target as any).nodeName === 'SELECT') {
                // tslint:disable-next-line: deprecation
                const aux: any = e.toElement;
                if (aux.labels && aux.labels[0] && aux.labels[0].className &&
                    aux.labels[0].className === 'label-form-group') {
                    aux.labels[0].style.color = '#80bdff';
                }
            }
        });
    }
}
