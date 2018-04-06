const Ids = require('ids'); // eslint-disable-line
const Movies = require('../lib/movies');
const assert = require('assert');

describe('making data store', () => {

    let store;
    beforeEach(() => {
        store = new Movies();
    });

    const reel = [
        {
            name: '8mm',
            genre: 'Thriller'
        },
        {
            name: 'Fifth Element',
            genre: 'Sci-fi'
        },
        {
            name: 'Witch',
            genre: 'Horror'
        }
    ];

    it('save', () => {
        const projector = store.save(reel);

        assert.deepEqual(projector, [
            {
                _id: reel[0]._id,
                name: '8mm',
                genre: 'Thriller'
            },
            {
                _id: reel[1]._id,
                name: 'Fifth Element',
                genre: 'Sci-fi'
            },
            {
                _id: reel[2]._id,
                name: 'Witch',
                genre: 'Horror'
            }
        ]);
    });

    it('get', () => {
        const projector = store.save(reel);
        const filmId = projector[2]._id;
        const getFilm = store.get(filmId);
        assert.deepEqual(getFilm, {
            _id: reel[2]._id,
            name: 'Witch',
            genre: 'Horror'
        });    
    });

    it('get null if no id match', () => {
        store.save(reel);
        const filmId = 'fake Id number';
        const getFilm = store.get(filmId);
        assert.equal(getFilm, null);
    });

    it('getAll', () => {
        const projector = store.save(reel);
        const allFilms = store.getAll(projector);
        assert.deepEqual(allFilms, store.filmFestival);
    });

    it('get empty array if array has no length', () => {
        const projector = store.save([]);
        const noFilms = store.getAll(projector);
        assert.deepEqual(noFilms, store.filmFestival);
    });

    it('remove true', () => {
        const projector = store.save(reel);
        const filmId = projector[2]._id;
        const removeFilm = store.remove(filmId);
        assert.deepEqual(removeFilm, { remove: true });
    });

    it('remove false', () => {
        store.save(reel);
        const filmId = 'fake id number';
        const removeFilm = store.remove(filmId);
        assert.deepEqual(removeFilm, { remove: false });
    });
});