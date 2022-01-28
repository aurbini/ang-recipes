import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ModalConfig } from 'src/app/shared/modal/modal.config';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  isPledgeApproved = false;
  @ViewChild('modal') private modalComponent: ModalComponent;

  constructor() {}

  public modalConfig: ModalConfig = {
    modalTitle: 'Title',
    onDismiss: () => {
      return true;
    },
    dismissButtonLabel: 'Dismiss',
    onSubmit: () => {
      this.fireAfterSubmit();
      return true;
    },
    submitButtonLabel: 'Submit',
    disableSubmitButton: !this.isPledgeApproved,
  };

  async openModal() {
    return await this.modalComponent.open();
  }
  onToggleIsPledgeApproved() {
    this.isPledgeApproved = !this.isPledgeApproved;
    this.modalConfig.disableSubmitButton = !this.isPledgeApproved;
  }

  fireAfterSubmit() {
    console.log('fire after modal submit');
  }
}
