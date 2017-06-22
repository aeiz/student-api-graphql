import createDebug from "debug";
import crypto from "crypto";
import config from "../config";

const debug = createDebug("crypto");

function encrypt(text) {
  let cipher = crypto.createCipher(config.CRYPTO_ALGO, config.JWT_SECRET);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(text) {
  let decipher = crypto.createDecipher(config.CRYPTO_ALGO, config.JWT_SECRET);
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export { encrypt, decrypt };
