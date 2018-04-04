const Ids = require('ids');
const Movies = require('../lib/movies');
const assert = require('assert');

describe('making data store', () => {

    let store;
    it('save', () => {
        store = new Movies('movie', 'comedy');
        store.save(store);
        assert.ok(store.ids != null);
    });

    it('get', () => {

    });
});