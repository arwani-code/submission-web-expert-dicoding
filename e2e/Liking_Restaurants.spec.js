const assert = require('assert');

Feature('Liking_Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(
    'Belum menambahkan tempat favorite nih, cari dan tambahkan lagi ya',
    '.resto-item__not__found',
  );
});

Scenario('Adding restaurant to favorite', async ({ I }) => {
  I.amOnPage('/');

  const restaurantName = await I.grabTextFrom(
    locate('.card__content h4').first(),
  );

  I.click(locate('.card a').first());

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.card');
  const favoriteRestaurantName = await I.grabTextFrom('.card__content h4');

  assert.strictEqual(restaurantName, favoriteRestaurantName);
});

Scenario('Remove restaurant from favorite', async ({ I }) => {
  I.amOnPage('/');

  const restaurantName = await I.grabTextFrom(
    locate('.card__content h4').first(),
  );

  I.click(locate('.card a').first());

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.card');
  const favoriteRestaurantName = await I.grabTextFrom('.card__content h4');
  assert.strictEqual(restaurantName, favoriteRestaurantName);

  I.click(locate('.card a').first());

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see(
    'Belum menambahkan tempat favorite nih, cari dan tambahkan lagi ya',
    '.resto-item__not__found',
  );
});
