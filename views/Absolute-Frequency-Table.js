'use strict';

const d3 = require('../lib/d3.custom.min.js');

/*
 * A tabulation of the absolute frequency of two events and the corresponding
 * combinations of events.
 *
 */

export default class AbsoluteFrequencyTable {
  constructor(el, data, l, c) {
    this.mount = el;
    this.data = data;
    this.labels = l;
    this.caption = c;
  }

  init() {
    const a1 = this.data[0],
          a2 = this.data[1],
          a3 = this.data[2],
          a4 = this.data[3],
           n = this.data[4];

    const table = d3.select(this.mount).append('table');

    table.append('caption')
       .html(this.caption);

    table.append('thead')
        .append('tr')
        .html(`<th>Event</th><th>${this.labels[0]}</th><th>${this.labels[1]}</th><th>Total</th>`);

    const tbody = table.append('tbody');

    tbody.append('tr')
        .html(`<th>${this.labels[2]}</th><td>${a1}</td><td>${a2}</td><td>${a1 + a2}</td>`);

    tbody.append('tr')
        .html(`<th>${this.labels[3]}</th><td>${a3}</td><td>${a4}</td><td>${a3 + a4}</td>`);

    table.append('tfoot')
        .append('tr')
        .html(`<th>Total</th><td>${a1 + a3}</td><td>${a2 + a4}</td><td>${n}</td>`);
  }
}
