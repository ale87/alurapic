import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }
}
