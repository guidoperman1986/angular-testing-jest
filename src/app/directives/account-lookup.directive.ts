import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { IBankInfo } from './account-validation/account-validation.component';

@Directive({
  selector: '[appAccountLookup]',
})
export class AccountLookupDirective {
  @Input('appAccountLookup') bankDetails!: IBankInfo;
  defaultActionText: string = 'Verify Account';
  loadingActionText: string = 'Verifying...';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private utilityService: UtilityService
  ) {}

  private modifyField(): void {
    // Set style of parent
    const parent = this.renderer.parentNode(this.el.nativeElement);
    this.renderer.setStyle(parent, 'position', 'relative');

    // Create action element inside the input field
    const actionButton = this.renderer.createElement('span');
    this.renderer.addClass(actionButton, 'inside__input--button');
    this.renderer.setProperty(
      actionButton,
      'innerHTML',
      this.defaultActionText
    );

    actionButton.addEventListener('click', (event: any) => {
      // Method that will return the account name
    });

    this.renderer.appendChild(parent, actionButton);
  }

  private verifyAccountDetails(actionButton: HTMLElement, parent: HTMLElement) {
    this.renderer.setProperty(
      actionButton,
      'innerHTML',
      this.loadingActionText
    );

    const accountNameDisplay = this.renderer.createElement('span');
    this.renderer.addClass(accountNameDisplay, 'result__under--text');

    this.renderer.appendChild(parent, accountNameDisplay);

    this.utilityService.validateAccount(this.bankDetails).subscribe(
      (resp) => {
        actionButton.innerHTML = this.defaultActionText;
        this.renderer.setProperty(
          accountNameDisplay,
          'innerHTML',
          resp.accountName
        );
      },
      (error: any) => {
        actionButton.innerHTML = this.defaultActionText;
        console.log(error);
      }
    );
  }
}
