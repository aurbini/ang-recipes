export interface ModalConfig {
  modalTitle: string;
  dismissButtonLabel?: string;
  submitButtonLabel?: string;
  shouldSubmit?(): Promise<boolean> | boolean;
  shouldDismiss?(): Promise<boolean> | boolean;
  onSubmit?(): Promise<boolean> | boolean;
  onDismiss?(): Promise<boolean> | boolean;
  disableSubmitButton: boolean;
  disableDismissButton?(): boolean;
  // hideSubmitButton?(): boolean;
  // hideDismissButton?(): boolean;
}
