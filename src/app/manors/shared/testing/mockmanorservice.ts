import {IManor, ManorFactory} from '../models/manor.model';

export class MockManorService {
  manor: IManor;

  constructor() {
    this.resetManor();
  }

  resetManor() {
    this.manor = ManorFactory.getManor();
  }

  resetTenants() {
    this.manor.tenants = [];
  }

  getManor(): IManor {
    return this.manor;
  }
}
