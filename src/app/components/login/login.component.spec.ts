import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppConstants } from '../../app.constants';
import Swal from 'sweetalert2';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let constants: AppConstants;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [AppConstants]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    constants = TestBed.inject(AppConstants);
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('username')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should make the username control required', () => {
    let username = component.form.get('username');
    username?.setValue('');
    expect(username?.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    let password = component.form.get('password');
    password?.setValue('');
    expect(password?.valid).toBeFalsy();
  });

  it('should make the form invalid when fields are empty', () => {
    component.form.controls['username'].setValue('');
    component.form.controls['password'].setValue('');
    expect(component.form.invalid).toBeTruthy();
  });

  it('should make the form valid when required fields are filled', () => {
    component.form.controls['username'].setValue('test');
    component.form.controls['password'].setValue('password');
    expect(component.form.valid).toBeTruthy();
  });

  it('should return true when login is successful', () => {
    component.form.controls['username'].setValue('test');
    component.form.controls['password'].setValue('password');
    expect(component.login()).toBeTruthy();
    Swal.close();
  });

  it('should return false when login is unsuccessful', () => {
    component.form.controls['username'].setValue('test');
    component.form.controls['password'].setValue('wrongpassword');
    expect(component.login()).toBeFalsy();
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    Swal.close();
  });

  it('should make the username control invalid if it exceeds max length', () => {
    let username = component.form.get('username');
    username?.setValue('a'.repeat(constants.MAX_LENGTH.USERNAME + 1));
    expect(username?.valid).toBeFalsy();
  });

  it('should make the password control invalid if it exceeds max length', () => {
    let password = component.form.get('password');
    password?.setValue('a'.repeat(constants.MAX_LENGTH.PASSWORD + 1));
    expect(password?.valid).toBeFalsy();
  });

  it('should make the username control valid if within max length', () => {
    let username = component.form.get('username');
    username?.setValue('a'.repeat(constants.MAX_LENGTH.USERNAME));
    expect(username?.valid).toBeTruthy();
  });

  it('should make the password control valid if within max length', () => {
    let password = component.form.get('password');
    password?.setValue('a'.repeat(constants.MAX_LENGTH.PASSWORD));
    expect(password?.valid).toBeTruthy();
  });
});
