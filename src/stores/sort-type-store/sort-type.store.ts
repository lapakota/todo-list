import { makeAutoObservable } from 'mobx';
import { RadioSortValues } from '../../typescript/enums/radio-sort-values';

class SortTypeStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentType: RadioSortValues = RadioSortValues.All;

  changeCurrentSort = (newSort: RadioSortValues) => {
    this.currentType = newSort;
  };
}

export const sortTypeStore = new SortTypeStore();
