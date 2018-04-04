
module.exports = class Movies {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }

    save(obj) {
        const ids = new Ids(obj);
        return obj;
    }
};