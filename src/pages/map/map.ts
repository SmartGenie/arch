import {Component} from '@angular/core';

//import {ConferenceData} from '../../providers/conference-data';
//import {Platform} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';

import {PopoverPage} from '../about-popover/about-popover';





@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  //conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ev: event});
  }
}
