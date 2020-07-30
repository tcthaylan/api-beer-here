import * as bcrypt from 'bcryptjs';

const createHash = async (pass) => {
  const hash = await bcrypt.hash(pass, 8);
  return hash;
};

export default createHash;
