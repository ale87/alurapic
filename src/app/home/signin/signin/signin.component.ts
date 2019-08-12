import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { PlatformDetectableService } from 'src/app/services/platform-detector.service'
import { AuthService } from './../../../services/auth.service'

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  form: FormGroup
  userNameMessage: string = 'Usuário é obrigatório'
  passwordMessage: string = 'Senha é obrigatória'
  @ViewChild('userNameInput', { static: false }) userNameInput: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private platform: PlatformDetectableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngAfterViewInit(): void {
    this.platform.isPlatformBrowser() && this.userNameInput.nativeElement.focus()
  }

  login() {
    const user = {
      userName: this.form.get('userName').value,
      password: this.form.get('password').value
    }
    this.auth.autenticate(user)
      .subscribe(
        () => this.router.navigate(['user', user.userName]),
        () => this.platform.isPlatformBrowser() && this.userNameInput.nativeElement.focus()
      )
  }
}
