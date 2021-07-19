// 정규표현식 id check
export const idCheck = (email) => {
  // email 확인 시 @[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*
  let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*/;

  return _reg.test(email);
};
