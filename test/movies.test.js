const Ids = require('ids');
const Movies = require('../lib/movies');
const assert = require('assert');

describe('making data store', () => {

    let store;
    beforeEach(() => {
        store = new Movies ({ movie, comedy });

    });

    it('save', () => {
        store = new Movies ({ movie, comedy, id:new Ids });
        assert.equal(store.Movies.id, 'id successful');
    });
});