import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  btnSrc: string;
  constructor() { }

  getBtnSrc(val) {
    this.btnSrc = val;
  }
}
