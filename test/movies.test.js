const Ids = require('ids');
const Movies = require('../lib/movies');
const assert = require('assert');

describe('making data store', () => {

    let store;
    beforeEach(() => {
        store = new Movies ('movie', 'comedy');

    });

    it('save', () => {
        store = new Movies ();
        store.save('movie', 'comedy');
        assert.ok(store.ids != null);
    });
});