import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoveragePage } from '../coverage/coverage';
import { AddfamilyPage } from '../addfamily/addfamily';
import { ClaimsPage } from '../claims/claims';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  
})
export class DashboardPage {
  policyData = [];

  policyObj = {
    policy: 'https://policyValue',
    coverage: 'coverageValue',
    riders: 'ridersValue',
    beneficiary: 'beneficiaryValue',
    expDate: 'expDateValue'
  };

  listOfInsurances = [
    {
      
    "name": "Medical",
    "children": ["Policy No", "Coverage", "Riders", "Beneficiary", "Cliams", "Expires On"],
    "open": false
    },
    {
      "name": "Life",
      "children": ["Policy No", "Coverage", "Riders", "Beneficiary", "Cliams", "Expires On"],
      "open": false
      },
      {
        "name": "Car",
        "children": ["Policy No", "Coverage", "Riders", "Beneficiary", "Cliams", "Expires On"],
        "open": false
        },
        {
          "name": "Travel",
          "children": ["Policy No", "Coverage", "Riders", "Beneficiary", "Cliams", "Expires On"],
          "open": false
          }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addPolicy() {
    this.policyData.push(this.policyObj);
  }

  toggleSection(i) {
    this.listOfInsurances[i].open = !this.listOfInsurances[i].open;
  }

addPolices(){
//alert("ok");
this.policyData.push(this.policyObj);
}
  ionViewDidLoad() 
  
    {

    }
    coverage()
    {
    this.navCtrl.push(CoveragePage);
    }
    addfamily()
{
this.navCtrl.push(AddfamilyPage);
}
logout()
{
  this.navCtrl.push(AddfamilyPage);
}
claims()
{
 this.navCtrl.push(ClaimsPage);
}

}
