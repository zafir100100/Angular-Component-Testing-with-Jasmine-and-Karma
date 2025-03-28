import { CommonModule } from '@angular/common'; // for ngIf, ngFor, etc.
import { Component } from '@angular/core'; // for Component decorator
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // for reactive forms
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form with username and password fields
    this.form = this.fb.group({
      username: new FormControl('', [
        Validators.required, 
        Validators.maxLength(50)  // Add maxLength validation for username
      ]),
      password: new FormControl('', [
        Validators.required, 
        Validators.maxLength(50)  // Add maxLength validation for password
      ])
    });
  }

  // Login method with SweetAlert2 integration
  login() {
    if (this.form.valid) {
      const { username, password } = this.form.value;

      // Check login credentials
      if (username === 'test' && password === 'password') {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back!',
        });
        return true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials',
          text: 'Username or password is incorrect.',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Form Incomplete',
        text: 'Please fill in both username and password.',
      });
    }
    return false;
  }
}