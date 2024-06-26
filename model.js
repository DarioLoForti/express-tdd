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

    add(item) {
        this.data.push(item);
        return this.data;
    }
  }
  
  module.exports = Model;
  