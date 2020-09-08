import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  accountName: any;
  duplicateAccountName: any;
  today: Date = new Date();
  randomText = 'Lorem ipsum blah blah blah';

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe((name: any) => {
      console.log(name);
      this.accountName = name;
      this.duplicateAccountName = name;
    });
  }

  updateAccountHandler(): void {
    console.log(this.duplicateAccountName);
    // let's work on updating the above in account-data-service
    this.accountDataService.updateAccountName(this.duplicateAccountName);
  }

}
