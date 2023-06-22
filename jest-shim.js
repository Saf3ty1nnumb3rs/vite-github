// https://stackoverflow.com/a/72310804
// solves TextEncoder errors for JSDom environment
import nodeCrypto from 'crypto';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
window.crypto = {
  getRandomValues(buffer) {
    return nodeCrypto.randomFillSync(buffer);
  },
};
