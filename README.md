# Angular Login Testing  

This repository contains unit tests for the `LoginComponent` in an Angular application. It ensures the login form behaves correctly, with validation rules and maximum length constraints.  

## **Technologies Used**  
- Angular (version 19)
- Jasmine & Karma (for testing)  
- SweetAlert2 (for modal handling)  

## **Test Scenarios**  

### ✅ **Component Initialization**  
- Should create the `LoginComponent`.  

### ✅ **Form Controls**  
- Should create a form with `username` and `password` fields.  
- Should make the `username` and `password` fields **required**.  
- Should mark the form as **invalid** when fields are empty.  
- Should mark the form as **valid** when required fields are filled.  

### ✅ **Form Validation Rules**  
- Should make the `username` invalid if it **exceeds max length**.  
- Should make the `password` invalid if it **exceeds max length**.  
- Should make the `username` valid if it's **within max length**.  
- Should make the `password` valid if it's **within max length**.  

### ✅ **Login Functionality**  
- Should return **true** when login is successful.  
- Should return **false** when login fails with incorrect credentials.  

### ✅ **SweetAlert2 Modal Handling**  
- Should **dismiss SweetAlert modal after each test** by simulating `Esc` key or calling `Swal.close()`.  

## **Setup & Run Tests**  

### 📌 **Installation**  
```bash
git clone https://github.com/your-username/angular-login-testing.git
cd angular-login-testing
npm install
```

### 📌 **Run Application**  
```bash
ng s
```

### 📌 **Run Test**  
```bash
ng test
```

## Screenshot (Application)

![image](https://github.com/user-attachments/assets/46c0da3b-f972-423b-995c-bce69c0dda1a)

## Screenshot (Test Report)

![image](https://github.com/user-attachments/assets/6545d43f-9ed6-46f3-b064-40582663f6f3)


