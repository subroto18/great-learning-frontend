const SECRET_KEY = import.meta.env.SECRET_KEY;
const VITE_APP_EXPIRESIN = import.meta.env.VITE_APP_EXPIRESIN;

const encodeJWT = (payload) => {
  //   try {
  //     const token = jwt.sign(payload, SECRET_KEY, {
  //       expiresIn: VITE_APP_EXPIRESIN,
  //     });
  //     return token;
  //   } catch (error) {
  //     console.error("Error encoding JWT:", error);
  //     return null;
  //   }
};

const decodeJWT = (token) => {
  //   try {
  //     const decoded = jwt.decode(token);
  //     return decoded;
  //   } catch (error) {
  //     console.error("Error decoding JWT:", error);
  //     return null;
  //   }
};

export { encodeJWT, decodeJWT };
