/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable quotes */
import FavoriteRestoIdb from './../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked Restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // hapus dulu restaurant dari daftar restaurant yang disukai
    await FavoriteRestoIdb.deleteResto(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
