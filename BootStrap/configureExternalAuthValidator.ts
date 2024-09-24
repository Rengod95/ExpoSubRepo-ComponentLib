import {AuthService, Validator} from '@/Service/lib/Auth/Adapter.ts';

export const configureExternalAuthValidator = (validator: Validator) => {
  if (AuthService.getInstance().isServiceActivated !== 'none' && AuthService.getInstance().useExternalValidator) {
    AuthService.getInstance().initValidator(validator);
  }
};
