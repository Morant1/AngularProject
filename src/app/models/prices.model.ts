// import { NumberValueAccessor } from '@angular/forms';

export interface Price {
    status: string,
    name: string,
    unit: string,
    description: string,
    values: {
        x:number,
        y:number
    }[]
  }