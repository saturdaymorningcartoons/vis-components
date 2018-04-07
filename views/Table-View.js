'use strict';

const d3 = require('../lib/d3.custom.min.js');

export default class Table {
  constructor(data, i, c) {
    this.data = data;
    this.identity = i;
    this.caption = c;
  }

  init() {
    const figure = d3.select(`figure#${this.identity}`);
    
    figure.select('figcaption')
        .text(this.caption);

    figure.select('thead')
        .append('tr')
        .selectAll('th')
        .data(Object.keys(this.data[0]))
      .enter().append('th')
        .text(d => d);

    const row = figure.select('tbody')
        .selectAll('.row')
        .data(this.data)
      .enter().append('tr')
        .attr('class', 'row');

    row.selectAll('.cell')
        .data(d => Object.values(d))
      .enter().append('td')
         .attr('class', 'cell')
         .text(d => d);
  }
}
