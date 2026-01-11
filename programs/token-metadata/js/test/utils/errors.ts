import { initCusper } from '@trezoaplex-foundation/cusper';
import { errorFromCode } from '../../src/generated';

export const cusper = initCusper(errorFromCode);
