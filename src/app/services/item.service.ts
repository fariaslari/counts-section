import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';

import { environment } from '../../environments/environment';

@Injectable()
export class ItemService {

  private data: Observable<Item[]>;

  constructor(
    private http: HttpClient
  ) {
    const url = `/data/items.json-data`;
    this.data = this.http.get<Item[]>(url).publishReplay(1).refCount();
  }

  getItems(): Observable<Item[]> {
    return this.data;
  }
}
