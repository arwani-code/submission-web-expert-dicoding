/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((Resto) => Resto.id == id);
  },

  getAllResto() {
    return favoriteRestaurants;
  },

  putResto(Resto) {
    if (!Resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favorite restaurant
    if (this.getResto(Resto.id)) {
      return;
    }

    favoriteRestaurants.push(Resto);
  },

  deleteResto(id) {
    favoriteRestaurants = favoriteRestaurants.filter((Resto) => Resto.id != id);
  },

  searchResto(query) {
    return this.getAllResto().filter((resto) => {
      const loweredCaseRestoTitle = (resto.name || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});
