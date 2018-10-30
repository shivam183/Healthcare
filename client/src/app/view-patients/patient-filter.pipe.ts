import { PipeTransform, Pipe } from '@angular/core';
import { Patient } from '../Patient';

@Pipe({
    name: 'patientFilter'
})
export class PatientFiterPipe implements PipeTransform {
    transform(patients: Patient[], searchPatient: string): Patient[] {
        if (!patients || !searchPatient) {
            return patients;
        }
        return patients.filter(patient =>
            patient.first_name.toLowerCase().indexOf(searchPatient.toLowerCase()) !== -1);
    }

}