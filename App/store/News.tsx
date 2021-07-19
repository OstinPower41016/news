import {makeAutoObservable} from 'mobx';

class News {
  isVisibleModal = false;

  constructor() {
    makeAutoObservable(this);
  }

  openModal() {
    this.isVisibleModal = true;
  }
}

export default new News();
