'use strict';

const alasql = require('../lib/alasql.min.js');
const d3 = require('../lib/d3.custom.min.js');

export default class FrequencyModel {
  constructor(criteriaOne, criteriaTwo) {
    this.data = this.dataGenerator();
    this.criteriaOne = criteriaOne;
    this.criteriaTwo = criteriaTwo;
  }

  init() {
    const allItems = this.data.length;

    const UV = alasql(`SELECT COUNT(*) AS combination FROM ? WHERE ${this.criteriaOne[0]} = 1 AND ${this.criteriaTwo[0]} = 1`, [this.data]);

    const U_V = alasql(`SELECT COUNT(*) AS combination FROM ? WHERE ${this.criteriaOne[0]} = 1 AND ${this.criteriaTwo[1]} = 1`, [this.data]);

    const _UV = alasql(`SELECT COUNT(*) AS combination FROM ? WHERE ${this.criteriaOne[1]} = 1 AND ${this.criteriaTwo[0]} = 1`, [this.data]);
    
    const _U_V = alasql(`SELECT COUNT(*) AS combination FROM ? WHERE ${this.criteriaOne[1]} = 1 AND ${this.criteriaTwo[1]} = 1`, [this.data]);

    const a1 = UV[0].combination, 
          a2 = U_V[0].combination,
          a3 = _UV[0].combination,
          a4 = _U_V[0].combination,
           n = allItems;

    return [a1, a2, a3, a4, n];
  }

  dataGenerator() {
    function randomizer() {
      return Math.round(Math.random());
    }

    let data = [];

    for (var i = 0; i < 6805; i++) {
      let p1, p2, d1, d2;

      const value = randomizer();
      p1 = value;
      p2 = Number(!value);
      const newValue = randomizer();
      d1 = newValue;
      d2 = Number(!newValue);
      data.push({ porous: p1, nonPorous: p2, defectiveDimensions: d1, nonDefectiveDimensions: d2 });
    }

    return data
  }
}

