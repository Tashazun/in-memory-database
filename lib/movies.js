const Ids = require('ids');
const ids = new Ids();

module.exports = class Movies {

    constructor(filmFestival) { //eslint-disable-line
        this.filmFestival = [];
    }

    save(obj) {
        const copyReel = obj.slice(0);

        copyReel.forEach(movie => {
            movie._id = ids.next();
            this.filmFestival.push(movie);
        });
        return copyReel.slice(0);
    }

    get(id) {
        const filmIndex = this.filmFestival.findIndex(info => id === info._id);
        const movie = this.filmFestival[filmIndex];
        return movie ? movie : null;
    }

    getAll() {
        return this.filmFestival.slice(0);
    }

    remove(id) {
        const filmIndex = this.filmFestival.findIndex(info => id === info._id);
        if(filmIndex != -1) {
            this.filmFestival.splice(filmIndex, 1);
            return { remove: true };
        } else if(filmIndex === -1) {
            return { remove: false };
        }
    }
};