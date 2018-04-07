'use strict';

const d3 = require('../lib/d3.custom.min.js');

export default class FreqDistModel {
  constructor(data) {
    this.data = data;
    this.nest = d3.nest();
  }

  /*
   * Reduce data to a set of categories and count the frequency in the view by
   * accessing the length of the values array.
   * @param {string} key - data column to group by
   */
  group(key) {
    const groupedData =  this.nest.key(d => d[key]).entries(this.data);
    return groupedData;
  }
}
