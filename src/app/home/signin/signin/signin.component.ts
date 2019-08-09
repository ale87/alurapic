import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  form: FormGroup
  userMessage: string = 'Usuário é obrigatório'
  passMessage: string = 'Senha é obrigatória'

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: RouterModule
  ) { }

  ngOnInit(): void { 
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const user = { 
      userName: this.form.get('userName').value,
      password: this.form.get('password').value
    }
    this.auth.autenticate(user)
      .subscribe(() => this.router.navigate(['user', user.userName]))
  }
}
