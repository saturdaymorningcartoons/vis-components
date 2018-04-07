'use strict';

const d3 = require('../lib/d3.custom.min.js');

/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure and the second column contains the number of
 * cases (frequency) of that measure.
 */
export default class FreqDistTable {
  constructor(data, m, c, a) {
    this.data = data;
    this.measure = m;
    this.caption = c;
    this.attribution = a;
  }

  init() {
    let totals = 0;

    this.data.forEach(d => {
      totals += d.values.length;
    });

    d3.select('figcaption')
         .text(this.caption);

    d3.select('thead')
        .html(`<tr><th>${this.measure}</th><th>Frequency</th></tr>`);

    d3.select('tbody')
        .selectAll('.row')
        .data(this.data)
      .enter().append('tr')
        .attr('class', 'row')
        .html(d => `<td>${d.key}</td><td>${d.values.length}</td>`);

    d3.select('tbody')
        .append('tr')
        .attr('class', 'row')
        .html(`<td>Total</td><td>${totals}</td>`);

    d3.select('small')
        .html(`<span>Source: </span>${this.attribution}`);
  }
}
