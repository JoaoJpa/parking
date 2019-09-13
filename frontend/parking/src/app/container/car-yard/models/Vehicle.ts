import { Client } from './Client';

export class Vehicle {
    id: number;
    color: string;
    carLicensePlace: string;
    model: string;

    constructor(id: number, color: string, carLicensePlace: string,  model: string) {
        this.id = id;
        this.color = color;
        this.model = model;
        this.carLicensePlace = carLicensePlace;
    }
}
