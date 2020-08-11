import { atom } from 'recoil';
import { kAuthState, kListPhoneState } from '../constant/keyAlias';

export const authState = atom({
  key: kAuthState,
  default: {}
});

export const listPhone = atom({
  key: kListPhoneState,
  default: {}
});