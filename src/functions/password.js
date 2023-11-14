import bcrypt from 'bcryptjs'
const password = {
  generateHash(pass) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt)
    return hash
  },
  async authenticate(hash) {
    const pass = password.promptPass();

    return new Promise((resolve, reject) => {
      bcrypt.compare(pass, hash, function(err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  promptPass() {
    const pass = prompt("What is the passkey?")
    return pass;
  }
}

export default password

