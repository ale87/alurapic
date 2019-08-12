import { AbstractControl } from '@angular/forms'

export function letterOnlyValidator(control: AbstractControl): boolean | object {
    if(control.value.trim() && !/^[a-zA-Z\s]*$/.test(control.value))
        return { letterOnly: true }
    return false
}