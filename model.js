class Model {
    constructor(fileName) {
        if (!fileName) {
          throw new Error('Parametro obbligatorio mancante');
        }
        this.fileName = fileName;
      }
  }
  
  module.exports = Model;
  