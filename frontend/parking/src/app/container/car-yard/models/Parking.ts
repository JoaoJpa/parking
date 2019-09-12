import { Client } from './Client';
import { Vehicle } from './Vehicle';
import { CarYard } from './CarYard';

export class Parking {
    id: number;
    carYard: CarYard;
    client: Client;
    vehicle: Vehicle;
    dateIn: string;
    dateOut: string;
    value: number;
    duration: number;
    occupied: boolean;
    finalized: boolean;
    pay: boolean;
    numberSpace: number;
}
