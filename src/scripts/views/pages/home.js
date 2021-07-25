/* eslint-disable no-empty-function */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-empty-function */
/* eslint-disable quotes */
import TheRestoranDbSource from '../../data/therestorandb-source';
import { createHomeRestoTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="title">
        <h2>Tempat Pilihan</h2>
        <span>
            Rekomendasi tempat-tempat pilihan yang berkualitas dari kami
        </span>
    </div>
    <div class="cards">
      
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestoranDbSource.homeResto();
    const homeContainer = document.querySelector('.cards');
    restaurants.forEach((restaurant) => {
      homeContainer.innerHTML += createHomeRestoTemplate(restaurant);
    });
  },
};

export default Home;
