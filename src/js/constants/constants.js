const PAGE_SIZE = '100';
const API_KEY = 'd4f1d87eca944aa2956f439a83304b3e';

const form = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');
const result = document.querySelector('.result');
const preloader = document.querySelector('.preloader');
const nothingFound = document.querySelector('.nothing-found');

const title = document.querySelector('.header__title_page-analytics');
const headers = document.querySelector('.in-headers');
const weekNews = document.querySelector('.week');
const container = document.querySelector('.analytics');



export {form, PAGE_SIZE, API_KEY, result, preloader, nothingFound, searchButton}
export {title, headers, weekNews, container}

