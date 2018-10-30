import { PipeTransform, Pipe } from '@angular/core';
import { Records } from '../records';

@Pipe({
    name: 'recordFilter'
})
export class RecordFiterPipe implements PipeTransform {
    transform(records: Records[], searchRecord: string): Records[] {
        if (!records || !searchRecord) {
            return records;
        }
        return records.filter(patient =>
            patient.date.indexOf(searchRecord) !== -1);
    }

}