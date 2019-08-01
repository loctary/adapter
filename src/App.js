// @flow
import React, { Component } from 'react';
import { Record, Set, List } from 'immutable';
import response from './response';

type ViewinfoType = {
  pages: string,
  rotations: List<int>,
};

type ItemsType = {
  ltext: string,
  created: string,
  sourceID: string,
  linkid: string,
  notes: string,
  tags: Set<string>,
  reason: string,
  versionID: string,
  details: string,
  finInfo: any,
  viewinfo: Record<ViewinfoType>,
  documentID: string,
};

export type ResponseType = {
  count: int,
  items: Record<ItemsType>,
  pageToken: any,
};

const ViewinfoFactory: ViewinfoType = new Record({
  pages: 0,
  rotations: new List(),
});

const ItemsFactory: ItemsType = new Record({
  ltext: '',
  created: '',
  sourceID: '',
  linkid: '',
  notes: '',
  tags: new Set(),
  reason: '',
  versionID: '',
  details: '',
  finInfo: null,
  viewinfo: ViewinfoFactory(),
  documentID: '',
});

const ResponseFactory: ResponseType = new Record({
  count: 0,
  items: ItemsFactory(),
  pageToken: null,
});

class App extends Component {
  componentDidMount() {
    const itemsMapped = response.items
      ? response.items.map(item => {
          const tags = item.tags ? new Set(item.tags) : undefined;
          const rotations = item.viewinfo && item.viewinfo.rotations ? new List(item.viewinfo.rotations) : undefined;
          const viewinfo = item.viewinfo ? ViewinfoFactory({ ...item.viewinfo, rotations }) : undefined;
          return { ...item, tags, viewinfo };
        })
      : undefined;
    const items = itemsMapped ? itemsMapped.map(item => ItemsFactory(item)) : undefined;
    const responseMapped = { ...response, items };
    const result = ResponseFactory(responseMapped);
    console.log(result);
  }

  render() {
    return <div />;
  }
}

export default App;
