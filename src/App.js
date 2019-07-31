import React, { Component } from 'react';
import Immutable from 'immutable';
import response from './response';

// const DocumentFactory: RecordFactory<Document> = new Record({
//   documentID: '',
//   created: '',
//   doc: '',
//   docStatus: '',
//   finInfo: null,
//   sourceID: null,
//   versionID: null,
//   folderID: null,
//   new: 0,
//   notes: '',
//   source: '',
//   total: 0,
//   type: 2,
//   tags: new Set(),
//   recentTags: new Set(),
//   doctype: 'general',
//   status: ['new'], // TODO: Remove synthetic attribute
//   reason: '',
//   protected: false,
//   viewinfo: 'ViewinfoFactory()',
//   linkid: '',
//   ltext: '',
//   isBeingProcessed: false,
// });

// для каждого item из json создается такая фабрика
// DocumentFactory() - отдает рекорд с дефолтными значениями
// DocumentFactory(item) -  отдает рекорд на основании объекта item, если в item
// нет определенных в рекорде ключей, ключи получают дефолтные значения
// у тебя получится такая фабрика для каждого рекорда который я описал в
// структуре. Их надо скомпоновать чтобы получить в итоге рекорд с полями среди
// которых будут другие рекорды

class App extends Component {
  componentDidMount() {
    const Res = Immutable.Record(response);
    const res = new Res();
    console.log(res);
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
