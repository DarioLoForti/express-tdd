class Model {
    constructor(fileName) {
        if (!fileName) {
          throw new Error('Parametro obbligatorio mancante');
        }
        this.fileName = fileName;
        this.data = [];
    }
  
    read() {
      return this.data;
    }
  }
  
  module.exports = Model;
  