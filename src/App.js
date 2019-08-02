// @flow
import React, { Component } from 'react';
import { Record, List } from 'immutable';
import type { RecordFactory, RecordOf } from 'immutable';
import response from './response';

type ViewinfoType = {|
  pages: number,
  rotations: List<number>,
|};

type ItemsType = {|
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
  viewinfo: RecordOf<ViewinfoType>,
  documentID: string, 
|};

export type ResponseType = {|
  count: number,
  items: List<RecordOf<ItemsType>>,
  pageToken: any,
|};

const ViewinfoFactory: RecordFactory<ViewinfoType> = new Record({
  pages: 0,
  rotations: new List(),
});

const ItemsFactory: RecordFactory<ItemsType> = new Record({
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

const ResponseFactory: RecordFactory<ResponseType> = new Record({
  count: 0,
  items: ItemsFactory(),
  pageToken: null,
});

class App extends Component<{}> {
  componentDidMount() {
    const itemsMapped = response.items.map(item => {
      const tags = item.tags ? new Set(item.tags) : new Set();
      const rotations = List(item.viewinfo.rotations);
      const viewinfo = item.viewinfo ? ViewinfoFactory({ pages: item.viewinfo.pages, rotations }) : ViewinfoFactory();
      // const result = { ...item, tags, viewinfo }; // not setting proper types
      const {
        ltext,
        created,
        sourceID,
        linkid,
        notes,
        reason,
        versionID,
        details,
        finInfo,
        documentID,
      } = item
      const result = { ltext, created, sourceID, linkid, notes, reason, versionID, details, finInfo, documentID, tags, viewinfo };
      return ItemsFactory(result);
    });
    const items = List(itemsMapped);
    // const responseMapped = { ...response, items }; // not setting proper types
    const { count, pageToken } = response;
    const responseMapped = { count, items, pageToken };
    const result = ResponseFactory(responseMapped);
    console.log(result);
  }
  
  render() {
    return <div />;
  }
  
}

export default App;

