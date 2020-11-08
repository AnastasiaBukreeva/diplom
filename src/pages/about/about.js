import '../../vendor/normalize.css';
import '../index/index.css';
import CommitCard from '../../js/components/CommitCard.js';
import CommitCardList from '../../js/components/CommitCardList.js';
import GitApi from '../../js/modules/GitApi';

import 'swiper/swiper-bundle.css';

import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

const commitContainer = document.querySelector('.swiper-wrapper');
const linkGithub = 'https://api.github.com/repos/yandex/localization-context-extension/commits';
const apiGit = new GitApi(linkGithub);
const commitsList = new CommitCardList(commitContainer, apiGit, createCommit, swipper);

function swipper() {
    const slider = document.querySelector('.swiper-container');
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 8,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            991: {
                spaceBetween: 16,
                slidesPerGroup: 2,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            }
        },
    });
}


function createCommit(date, img, name, mail, text) {
    return new CommitCard(date, img, name, mail, text).create();
}

commitsList.render();