import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("authorisEvan1993"); // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("wordPeace123456"); // 十六位十六进制数作为密钥偏移量

//加密方法
function encrypt(word) {
  const utfStr = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(utfStr, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

//解密方法
function decrypt(word) {
  const encryptedHexStr = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Hex.parse(word)
  );
  const decrypt = CryptoJS.AES.decrypt(encryptedHexStr, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypt.toString(CryptoJS.enc.Utf8).toString();
}

export { encrypt, decrypt };
