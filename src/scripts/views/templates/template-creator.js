/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createHomeRestoTemplate = (restaurant) => `
        <div class="card">
            <a href="#/detail/${restaurant.id}" class="card__link">
                <img
                tabindex="0"
                class="lazyload card__image"
                data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                alt="${restaurant.name || '-'}"
                />      
            </a>
            <div class="card__content">
            
                <h4 tabindex="0" class="resto__title">${
                  restaurant.name || '-'
                }</h4>
                <p tabindex="0">
                ${restaurant.description || '-'}</p>
            </div>
            <div class="card__info">
                <div tabindex="0"><ion-icon name="thumbs-up-sharp"></ion-icon> ${
                  restaurant.rating || '-'
                }</div>
                <div>
                </div>
                <div tabindex="0">
                    <h3 class="card__link">${restaurant.city}</h3>
                </div>
            </div>
        </div>
`;

const createFavoriteRestoTemplate = (restaurant) => `
        <div class="card">
            <a href="#/detail/${restaurant.id}" class="card__link">
                <img
                tabindex="0"
                class="lazyload card__image"
                data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                alt="${restaurant.name}"
                />      
            </a>    
            <div class="card__content">
            
                <h4 tabindex="0">${restaurant.name}</h4>
                <p tabindex="0">
                ${restaurant.description}</p>
            </div>
            <div class="card__info">
                <div tabindex="0"><ion-icon name="thumbs-up-sharp"></ion-icon> ${
                  restaurant.rating
                }</div>
                <div>
                </div>
                <div tabindex="0">
                    <h3 class="card__link">${restaurant.city}</h3>
                </div>
            </div>  
        </div>
`;

const createDetailRestoTemplate = (restaurant) => ` 
<div class="card">
                <img
                tabindex="0"
                class="lazyload card__image"
                data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                alt="${restaurant.name}"
                />
            <div class="card__content">
                <h4 tabindex="0">${restaurant.name}</h4>
                <h4 tabindex="0">${restaurant.address}</h4>
                <p tabindex="0">
                ${restaurant.description}</p>
            </div>
            <div class="card__info">
                <div tabindex="0"><ion-icon name="thumbs-up-sharp"></ion-icon> ${
                  restaurant.rating
                }</div>
                <div>
                    <p>${restaurant.city}</p>
                </div>
                <div>
                <a class="card__link">${restaurant.categories.map(
                  (category) => category.name
                )}</a>
                </div>
            </div>
</div>
<div class="card">
                <img
                tabindex="0"
                class="lazyload card__image"
                data-src="${CONFIG.BASE_IMAGE_URL_BAR}"
                alt="${restaurant.name}"
                />
            <div class="card__content">
                    <h5>Foods</h5>
                    ${restaurant.menus.foods.map((food) => food.name)}
            </div>
            <div class="card__content">
                    <h5>Drinks</h5>
                    ${restaurant.menus.drinks.map((drink) => drink.name)}
            </div>
            <div class="card__info">
                <div tabindex="0"></div>
                <div></div>
                <div tabindex="0">
                 </div>
            </div>
</div>
         `;

const createShowReviewsTemplate = (restaurant) => `
          <div class="card">
                <img
                tabindex="0"
                class="lazyload card__image"
                data-src="${CONFIG.BASE_IMAGE_URL_D}"
                alt="${restaurant.name}"
                />
            <div class="card__content">
            
                <h4 tabindex="0">${restaurant.name}</h4>
                <p tabindex="0">
                ${restaurant.review}</p>
            </div>
            <div class="card__info">
                <div tabindex="0">
                    <h3 class="card__link">${restaurant.date}</h3>
                </div>
            </div>
        </div>         
`;

const createLikeRestoTemplate = () => `
            <button aria-label="like this resto" id="likeButton" class="like">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
            </button>
            `;

const createUnlikeRestoButtonTemplate = () => `
            <button aria-label="unlike this resto" id="likeButton" class="like">
                <i class="fa fa-heart" aria-hidden="true"></i>
            </button>
            `;

export {
  createHomeRestoTemplate,
  createFavoriteRestoTemplate,
  createDetailRestoTemplate,
  createShowReviewsTemplate,
  createLikeRestoTemplate,
  createUnlikeRestoButtonTemplate,
};
