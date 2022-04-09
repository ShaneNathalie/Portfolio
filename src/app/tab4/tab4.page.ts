import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  contacts = [
    {
      name: 'Jelyn',
      phoneNumber: '09488745380',
      image: 'a.jpg',
    },
    {
      name: 'Maria',
      phoneNumber: '09355543564',
      image: 'd.png',
    },
    {
      name: 'Russ',
      phoneNumber: '09517664573',
      image: 'b.png',
    },
    {
      name: 'My number',
      phoneNumber: '09518515381',
      image: 'e.png',
    },
    {
      name: 'Rose',
      phoneNumber: '09503376844',
      image: 'd.png',
    },
    {
      name: 'Rey',
      phoneNumber: '09367656690',
      image: 'c.png',
    },
    {
      name: 'Tali',
      phoneNumber: '09164412267',
      image: 'f.png',
    },
  ];

  customAlertOptions: any = {
    header: 'Contacts',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
