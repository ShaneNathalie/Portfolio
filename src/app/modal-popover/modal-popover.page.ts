import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-popover.page.html',
  styleUrls: ['./modal-popover.page.scss'],
})
export class ModalPopoverPage implements OnInit {

  @Input() contact;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log(this.contact);

  }

  async cancel() {
    await this.modalCtrl.dismiss();
  }
  async delete() {
    await this.modalCtrl.dismiss(this.contact);
  }
}
