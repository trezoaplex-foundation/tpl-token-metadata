import { UmiPlugin } from '@trezoaplex-foundation/umi';
import { tplToolbox } from '@trezoaplex-foundation/tpl-toolbox';
import { createMplTokenMetadataProgram } from './generated';

export const tplTokenMetadata = (): UmiPlugin => ({
  install(umi) {
    umi.use(tplToolbox());
    umi.programs.add(createMplTokenMetadataProgram(), false);
  },
});
