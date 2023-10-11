import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { MustMatch } from './confirmar-password';

@Directive({
  selector: '[mustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmarPasswordDirective, multi: true }]
})

export class ConfirmarPasswordDirective implements Validator {
  @Input('mustMatch') mustMatch: string[] = [];

  constructor(private customValidator: MustMatch) { }

  validate(formGroup: FormGroup): ValidationErrors {
      return this.customValidator.MatchPassword(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
}
