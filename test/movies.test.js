const Ids = require('ids');
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
});