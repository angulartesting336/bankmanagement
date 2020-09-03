import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      guardianType: ['', Validators.required],
      guardianName: ['', Validators.required],
      address: ['', Validators.required],
      citizenship: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      contact: ['', [Validators.required, Validators.minLength(10)]],
      dob: ['', Validators.required],
      registrationDate: ['', Validators.required],
      accountType: ['', Validators.required],
      branchName: ['', Validators.required],
      citizenStatus: ['', Validators.required],
      initialDeposit: ['', Validators.required],
      idProof: ['', Validators.required],
      idDocument: ['', Validators.required],
      refAccountHolder: ['', Validators.required],
      refAccHolderNo: ['', Validators.required],
      refAccHolderAddress: ['', Validators.required],
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    // this.userService.register(this.registerForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate(['/login']);
    //         },
    //         error => {
    //             this.loading = false;
    //         });
}
}
