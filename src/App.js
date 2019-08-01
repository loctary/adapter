import React, { Component } from 'react';
import { Record, Set, List } from 'immutable';
import response from './response';

type ViewinfoTypes = {
  pages: number,
  rotations: List<int>,
};

type ResponseTypes = {
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
  viewinfo: Record<ViewinfoTypes>,
  documentID: string,
};

const ViewinfoFactory: ViewinfoTypes = new Record({
  pages: 0,
  rotations: new List(),
});

const DocumentFactory: ResponseTypes = new Record({
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

class App extends Component {
  componentDidMount() {
    const Res = Record(response);
    const res = new Res();
    console.log(res.items.map(DocumentFactory));
  }

  render() {
    return <div />;
  }
}

export default App;
