import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../_services/http-service.service";
import { CommonService } from "../_services/common.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private httpService: HttpServiceService, private storage: Storage, private commonService: CommonService) { 
    // this.set_api_auth_token();
  }

  ngOnInit() {
    
  }

  set_api_auth_token() {
    let post = {
      'user_name': 'DNC_online_shopee@2021',
      'password': 'DNC@2021#OnlineShoppee'
    }
    this.httpService.post('get_auth_token', post)
      .subscribe(result => {
        if(result.status == 1){
          this.storage.set('auth_token', result.data.token);
        }else{
          this.commonService.presentToast('API Authentication failed', 3000);
        }
      });
  }

  customer_login() {
    
  }

}
