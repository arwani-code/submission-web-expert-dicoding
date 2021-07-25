/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-new */
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(
          document.querySelectorAll('.resto-item__not__found').length
        ).toEqual(1);

        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.card').length).toEqual(2);
        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah resto A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Sebuah resto B',
        },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
