import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloCache } from 'apollo-cache';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-angular-link-http';
import { ItemType } from './types/item.type';
import { DocumentNode } from 'graphql';

@Injectable()
export class GraphqlService {
  public items: ItemType[];

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
      cache: new InMemoryCache() as ApolloCache<NormalizedCacheObject>,
    })
  }

  public runQuery = (query: DocumentNode) => {
    return this.apollo.query({
      query
    })
  }
}