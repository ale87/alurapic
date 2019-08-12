import { AbstractControl } from '@angular/forms'

export function lowerCaseValidator(control: AbstractControl): boolean | object {
    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value))  
        return { lowerCase: true }
    return false
}