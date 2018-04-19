'use strict';

const d3 = require('../lib/d3.custom.min.js');

export default class ClassificationTable {
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
        .html(`<th>${this.labels[2]}</th><td>${percentage(a1, n)}</td><td>${percentage(a2, n)}</td><td>${percentage(a1 + a2, n)}</td>`);

    tbody.append('tr')
        .html(`<th>${this.labels[3]}</th><td>${percentage(a3, n)}</td><td>${percentage(a4, n)}</td><td>${percentage(a3 + a4, n)}</td>`);

    table.append('tfoot')
        .append('tr')
        .html(`<th>Total</th><td>${percentage(a1 + a3, n)}</td><td>${percentage(a2 + a4, n)}</td><td>${percentage(a1 + a2 + a3 + a4, n)}</td>`);

    function percentage(a, n) {
      const ratio = ((a / n) * 100).toPrecision(3);
      let result;
      ratio > 0 ? result = `${ratio}%` : result = '0.0';
      return result;
    }
  }
}
