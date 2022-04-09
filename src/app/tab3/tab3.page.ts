import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from '../modal-popover/modal-popover.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
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

  contactForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      familyName: [''],
      phoneNumber: [''],
    });
  }

  onSubmit() {
    const contact = this.contactForm.value;
    this.contacts.push({
      image: 'b.png',
      name: contact.name + ' ' + contact.familyName,
      phoneNumber: contact.phoneNumber,
    });
    this.contactForm.reset();
  }

  async openModal(selectedContact) {
    const modal = await this.modalCtrl.create({
      component: ModalPopoverPage,
      componentProps: {
        contact: selectedContact,
      },
    });

    modal.onDidDismiss().then((res) => {
      if(res.data) {
        this.deleteContact(res.data);
      }
    });

    return await modal.present();
  }

  deleteContact(contact) {
    this.contacts = this.contacts.filter(c => c.phoneNumber !== contact.phoneNumber);
  }

  navigateToMessage() {
    this.router.navigateByUrl('/tabs/tab4');
  }
}
