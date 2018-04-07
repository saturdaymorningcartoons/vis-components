'use strict';
import FreqDistModel from '../../models/FreqDist-Model';
import FreqDistTable from '../../views/FreqDistTable-View';

const d3 = require('../../lib/d3.custom.min.js');

d3.csv('./data/engineering-interest.csv', (error, data) => {
  if (error) throw error;

  d3.text('../templates/table.html', str => {
    d3.select('.container').html(str);

    const model = new FreqDistModel(data).group('group');
    console.log(model);

    new FreqDistTable(model, 'group', 'Numbers for Engineering Interest Study', 'Nineteen year followup of engineer interests').init();

  });
});
