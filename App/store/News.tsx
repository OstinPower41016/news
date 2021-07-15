import {} from 'mobx-react-lite';
import {makeAutoObservable} from 'mobx';

class NewsState {
  isVisibleModal: boolean;

  constructor() {
    makeAutoObservable(this);
    this.isVisibleModal = false;
  }

  openModal() {
    this.isVisibleModal = true;
  }
}

export default NewsState;
