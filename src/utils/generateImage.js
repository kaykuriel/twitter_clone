import CryptoJS from "crypto-js";

export const getAvatar = (email) => {
  const hash = CryptoJS.MD5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?s=${30}&d=identicon`;
};


export const getRandomImage = () => {
 return `https://picsum.photos/600/400?random=${Math.random()}`;
};