import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';

import { GraphqlService } from '../graphql/graphql.service';
import gql from 'graphql-tag';
import { ItemType } from '../graphql/types/item.type';

@Injectable()
export class ItemService {

  constructor(
    private service: GraphqlService
  ) {}

  getItems(): Observable<Item[]> {
    const query = gql`query getItems{
      items {
          id,
          name,
          imagePath,
          price,
          initialQty
        }
  }`;

    return new Observable<Item[]>(observer => {
      this.service.runQuery(query).subscribe((result: {data: any}) => {
        let items = result.data.items as ItemType[];
        observer.next(items as Item[])
      });
    });
  }
}
