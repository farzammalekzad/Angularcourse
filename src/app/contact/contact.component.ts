import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';
import { ContactType } from '../shared/feedback';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
      }
    );
    this.feedbackFormDirective.resetForm();
  }
}
