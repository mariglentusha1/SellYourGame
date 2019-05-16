import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({

      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required)
  });
  }

  onSubmit() {
this.registerForm.patchValue({});
  }

}
