/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (Resto) => {
      await FavoriteRestoIdb.deleteResto(Resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
