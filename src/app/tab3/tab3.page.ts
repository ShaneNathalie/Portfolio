import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
//   Jelyn: 09488745380
// Maria: 09355543564
// Russ: 09517664573
// Ate ann: 09457585278
// My number: 09518515381
// Rose: 09503376844
// Rey: 09367656690
// Tali: 09164412267
  contacts = [
    {
      name: 'Jelyn',
      phoneNumber: '09488745380',
      image: 'a.jpg'
    },
    {
      name: 'Maria',
      phoneNumber: '09355543564',
      image: 'd.png'
    },
    {
      name: 'Russ',
      phoneNumber: '09517664573',
      image: 'b.png'
    },
    {
      name: 'My number',
      phoneNumber: '09518515381',
      image: 'e.png'
    },
    {
      name: 'Rose',
      phoneNumber: '09503376844',
      image: 'd.png'
    },
    {
      name: 'Rey',
      phoneNumber: '09367656690',
      image: 'c.png'
    },
    {
      name: 'Tali',
      phoneNumber: '09164412267',
      image: 'f.png'
    },
  ];


  constructor() {}

}
