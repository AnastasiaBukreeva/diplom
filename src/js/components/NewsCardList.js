import { CardList } from './CardList.js';
import { searchButton } from '../constants/constants.js'

export class NewsCardList extends CardList {
    constructor(cardsArr, result) {
        super(cardsArr);
        this.container = result.querySelector('.result__card-list');
        this.result = result;
        this.addCardButton = result.querySelector('.result__add');
        this.button = searchButton;
    }
    clearContainer = () => {
        this.cardsArr = []
        this.removeEventListeners();
        while(this.container.firstChild){
            this.container.firstChild.remove()
        }
        this.buttonVisible();
    }

    getThreeCards = () => { 
        this.render(this.cardsArr.splice(0, 3))
        if(this.cardsArr.length == 0){
            this.buttonHidden();
        }
    }

    buttonVisible = () =>{
        this.addCardButton.style.visibility = "visible";
    }

    buttonHidden = () =>{
        this.addCardButton.style.visibility = "hidden";
    }

    setEventListener = () => {
        this.getThreeCards();
        this.addCardButton.addEventListener('click', this.getThreeCards);
        this.button.addEventListener('click', this.clearContainer);
    }

    removeEventListeners = () =>{
        this.addCardButton.removeEventListener('click', this.getThreeCards);
        this.button.removeEventListener('click', this.clearContainer)
    }
}