const Ids = require('ids');
const ids = new Ids();

module.exports = class Movies {
    // store: [],

    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
        this.ids = null;
    }

    save(obj) {
        this.ids = ids.next();
        return obj;
    }
};