import { Component, OnInit } from '@angular/core';
import { FutureService } from './future.service';
import { Idea } from 'src/app/shared/models/idea.model';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent {
  ideaForm: FormGroup;
  subPoints: FormArray;
  ideasList = [];
  data = '';

  constructor(
    private futureService: FutureService,
    private formBuilder: FormBuilder
  ) {
    this.ideaForm = this.formBuilder.group({
      idea: new FormControl('', Validators.required),
      subPoints: this.formBuilder.array([this.createIdea()])
    });
    this.futureService.getIdeas().subscribe((data) => {
      this.ideasList = data;
    });
  }

  createIdea(): FormGroup {
    return this.formBuilder.group({
      subPoint: new FormControl('', Validators.required)
    });
  }
  addIdea(): void {
    this.subPoints = this.ideaForm.get('subPoints') as FormArray;
    this.subPoints.push(this.createIdea());
  }
  removeIdea(i: number): void {
    this.subPoints = this.ideaForm.get('subPoints') as FormArray;
    this.subPoints.removeAt(i);
  }
  saveIdea(): void {
    console.log(JSON.stringify(this.ideaForm.value));
    // this.futureService.createIdea(this.ideaForm.value);
    // this.ideaForm.reset();
  }
}
