import { autorun, makeAutoObservable } from 'mobx';
import { SortTypes } from '../../typescript/enums/sort-types';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/local-storage-helper';

import { LocalStorageKeys } from '../../typescript/enums/local-storage-keys';

class SortTypeStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentType: SortTypes = loadFromLocalStorage(LocalStorageKeys.SortTypes) || SortTypes.All;

  changeCurrentSort = (newSort: SortTypes) => {
    this.currentType = newSort;
  };
}

export const sortTypeStore = new SortTypeStore();

autorun(() => {
  saveToLocalStorage(LocalStorageKeys.SortTypes, sortTypeStore.currentType);
});
