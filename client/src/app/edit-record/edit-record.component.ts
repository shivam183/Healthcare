import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { Records } from '../records';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  record: Records;

  constructor(private recordService: RecordsService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.recordService.apiData$.subscribe(record => {
      if (record) {
        this.record = record;
      }
    })
  }

}
