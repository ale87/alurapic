import { PlatformDetectableService } from 'src/app/services/platform-detector.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SignupService } from './../../services/signup.service'
import { CheckUservalidatorService } from './../../services/check-user.validator.service'
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator'
import { letterOnlyValidator } from 'src/app/shared/validators/letter-only.validator'
import { NewUser } from 'src/app/shared/interfaces/newUser'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [ CheckUservalidatorService ]
})

export class SignupComponent implements OnInit {
    form: FormGroup
    @ViewChild('fullNameInput', { static: false }) fullNameInput: ElementRef<HTMLInputElement>
    fullNameMessage: any = {
        required: 'Nome é obrigatório',
        minlength: 'O tamanho mínimo é de 2 caracteres',
        maxlength: 'O tamanho máximo é de 50 caracteres',
        letterOnly: 'Apenas letras são permitidas'
    }
    userNameMessage: any = {
        required: 'Nome de usuário é obrigatório',
        minlength: 'O tamanho mínimo é de 2 caracteres',
        maxlength: 'O tamanho máximo é de 30 caracteres',
        lowerCase: 'Apenas letras minúsculas',
        userTaken: 'Usuário já existe',
        userNotTaken: 'Usuário disponível'
    }
    emailMessage: any = {
        required: 'Email é obrigatório',
        email: 'Email não é válido'
    }
    passwordMessage: any = {
        required: 'Senha é obrigatória',
        minlength: 'O tamanho mínimo é de 7 caracteres',
        maxlength: 'O tamanho máximo é de 15 caracteres',
    }

    constructor(
        private formBuilder: FormBuilder,
        private checkUser: CheckUservalidatorService,
        private signup: SignupService,
        private router: Router,
        private platform: PlatformDetectableService
    ) { }

    ngOnInit() {
        const userTaken = this.checkUser.checkUserName()
        this.form = this.formBuilder.group({
            userName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30),
                    lowerCaseValidator
                ],
                [
                    userTaken
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(50),
                    letterOnlyValidator
                ]
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: ['',
                [
                    Validators.required,                    
                    Validators.minLength(7),
                    Validators.maxLength(15)
                ]
            ]
        })
    }

    ngAfterViewInit(): void {        
        this.platform.isPlatformBrowser() && this.fullNameInput.nativeElement.focus()
    }

    register() {
        const newUser = this.form.getRawValue() as NewUser
        this.signup.signUp(newUser)
        this.router.navigate([''])
    }
}