import { Injectable } from '@angular/core'
import { debounceTime, switchMap, map, first } from 'rxjs/operators'
import { AbstractControl } from '@angular/forms'
import { SignupService } from './signup.service'

@Injectable()

export class CheckUservalidatorService {
    constructor(private signup: SignupService) { }

    checkUserName() {
        return(control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.signup.checkUserName(userName)
                ))
                .pipe(map(isTaken => isTaken ? { userTaken: true } : null))
                .pipe(first())
        }
    }
}