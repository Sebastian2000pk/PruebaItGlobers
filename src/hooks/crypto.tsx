const CryptoJS = require("react-native-crypto-js");

export const encryptText = (text: string) => {
  return CryptoJS.AES.encrypt(text, 'clavesecreta123').toString();
}

export const decryptText = (text: string) => {
  return CryptoJS.AES.decrypt(text, 'clavesecreta123').toString(CryptoJS.enc.Utf8);
}