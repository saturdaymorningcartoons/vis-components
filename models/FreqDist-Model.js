'use strict';

const d3 = require('../lib/d3.custom.min.js');

export default class FreqDistModel {
  constructor(data) {
    this.data = data;
    this.nest = d3.nest();
  }

  /*
   * Reduce categorical data into a univariate value. Frequency in the view is
   * accessed by the reading the length of the values array.
   * @param {string} key - data column to group by
   */
  group(key) {
    const groupedData =  this.nest.key(d => d[key]).entries(this.data);
    return groupedData;
  }
}
