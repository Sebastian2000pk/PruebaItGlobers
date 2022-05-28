import CryptoJS from 'crypto-js';

export const encrypt = (text: string) => {
  return CryptoJS.AES.encrypt(text, 'clavesecreta123').toString();
}

export const decrypt = (text: string) => {
  return CryptoJS.AES.decrypt(text, 'clavesecreta123').toString(CryptoJS.enc.Utf8);
}