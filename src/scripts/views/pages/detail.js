/* eslint-disable comma-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-empty-function */
/* eslint-disable quotes */
import UrlParser from '../../routes/url-parser';
import TheRestoranDbSource from '../../data/therestorandb-source';
import {
  createDetailRestoTemplate,
  createShowReviewsTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
            <div class="title">
            </div>
            <div class="cards">
              
            </div>
             <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await TheRestoranDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('.cards');
    const { restaurant } = restaurants;
    const { customerReviews } = restaurant;
    restoContainer.innerHTML += createDetailRestoTemplate(restaurant);
    customerReviews.forEach((restaurant) => {
      restoContainer.innerHTML += createShowReviewsTemplate(restaurant);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      resto: restaurants.restaurant,
    });
  },
};

export default Detail;
