import {Service} from './service';

export class Person {
  service: Service;
  constructor(service: Service) {
    this.service = service;
  }
  getInfo() {
    return this.service.getServiceName();
  }
}
