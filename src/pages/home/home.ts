import { ExamSheduleService } from '../../providers/exam-schedule';
import { ExamSchedulePage } from './../exam-schedule/exam-schedule';
import { NavController} from 'ionic-angular';
import { FormBaseComponent } from './../../components/form-base/form-base';
import {
  Component,
  OnInit,
} from '@angular/core';
import 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends FormBaseComponent implements OnInit {

  public listLogs: any[];

  public frm: FormGroup;
  public formErrors = {
    search: ''
  }
  public validationMessages = {
    search: {
      required: 'Vui lòng nhập mã số sinh viên.',
      pattern: 'Mã số sinh viên không hợp lệ.',
      maxlength: 'Mã số sinh viên không hợp lệ.',
      minlength: 'Mã số sinh viên không hợp lệ.'
    }
  }
  public controlConfig = {
    search: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d*\.?\d+$/),
      Validators.maxLength(8),
      Validators.minLength(8)
    ])
  }
  constructor(
    private _examScheduleService: ExamSheduleService,
    private _navCtrl: NavController) {
    super();
  }


  public ngOnInit() {
    super.ngOnInit();
    this.frm.get('search').valueChanges
    .debounceTime(250)
    .distinctUntilChanged()
    .subscribe((idStudent: string) => {
      if(idStudent.length === 8 && this.frm.valid) {
        this.openNewPage(idStudent);
      }
    });
    this._examScheduleService.getLogs().subscribe((response) => {
      if(response.result) {
        this.listLogs = response.data;
      }
    });

   
  }
  public openNewPage(idStudent: string) {
    if(this.frm.valid && idStudent.length === 8) {
      this._navCtrl.push(ExamSchedulePage, {
        idStudent: idStudent
      }, { duration: 250 })
    } else {
      this.frm.markAsDirty();
    }
  }
}
