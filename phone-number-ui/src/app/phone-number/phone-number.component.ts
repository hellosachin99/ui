import { Component, OnInit } from '@angular/core';
import { PhoneNumberService } from '../phone-number.service';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  phone: string = '';
  modifiedNumbers: Array<string> = [];
  hasResponse = false;
  constructor(private phoneNumberService: PhoneNumberService) { }

  ngOnInit(): void {
  }

  modify(): void {
    this.phoneNumberService.modifyNumber(this.phone).subscribe(res => {
      if(res) {
        console.log(res);
        this.hasResponse = true;
        this.modifiedNumbers = JSON.parse(JSON.stringify(res));
      }
    }, err => {
      console.log(err);
    });
  }

}
