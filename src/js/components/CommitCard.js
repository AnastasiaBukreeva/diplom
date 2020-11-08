export default class CommitCard {
    constructor(date, img, name, mail, text) {
      this.date = date;
      this.img = img;
      this.name = name;
      this.mail = mail;
      this.text = text;
    }
    create() {
      const createCard = `   
        <div class="card swiper-slide">
      <div class="card__date"></div>
       <div class="card__person">
    <img
      class="card__img"
    />
        <div class="card__text-block">
         <h4 class="card__name"></h4>
         <span class="card__mail"></span>
        </div>
      </div>
      <p class="card__text"></p>
    </div> 
        `;
  
      const element = document.createElement('div');
      element.insertAdjacentHTML('afterbegin', createCard);
      const newCard = element.firstElementChild;
      this.newCard = newCard;
  
      newCard.querySelector('.card__date').textContent = this.date;
      newCard.querySelector('.card__img').setAttribute('src', `${this.img}`);
      newCard.querySelector('.card__name').textContent = this.name;
      newCard.querySelector('.card__mail').textContent = this.mail;
      newCard.querySelector('.card__text').textContent = this.text;
  
      return newCard;
    }
  }
  