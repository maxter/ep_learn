import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private translate: TranslateService) { }

  ngOnInit() {
  }

  logoff() : void {
   this.auth.logOff();
  }

  changeLanguage(value: string){
    switch(value) {
      case "en":
        this.translate.use('en');
         break;
      case "pl":
        this.translate.use('pl');
         break;
    }
  }

}
