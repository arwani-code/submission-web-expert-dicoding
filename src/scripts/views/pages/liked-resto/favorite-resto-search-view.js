/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
import { createHomeRestoTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
          <div class="title">
            <input id="query" type="text" class="input-restaurants" placeholder="Temukan tempat favorite...">
            <h2>Tempat Favorite</h2>
        </div>
        <div id="resto" class="cards card-favorite resto">
          
        </div>
         `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(resto) {
    this.showFavoriteResto(resto);
  }

  showFavoriteResto(resto = []) {
    let html;
    if (resto.length) {
      html = resto.reduce(
        (carry, cafe) => carry.concat(createHomeRestoTemplate(cafe)),
        ''
      );
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<span class="resto-item__not__found resto__not__found span-resto">Belum menambahkan tempat favorite nih, cari dan tambahkan lagi ya</span>';
  }
}

export default FavoriteRestoSearchView;
