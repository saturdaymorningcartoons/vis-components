'use strict';
import FreqDistModel from '../../models/FreqDist-Model';
import FreqDistTable from '../../views/FreqDistTable-View';
import Table from '../../views/Table-View';

const d3 = require('../../lib/d3.custom.min.js');

d3.csv('./data/engineering-interest.csv', (error, data) => {
  if (error) throw error;

  d3.text('../templates/table.html', str => {
    // tag the figure with an identifier
    d3.select('.container').html(str).select('figure').attr('id', 'first');

    new Table(data, 'first', 'Table 1.1 Survey of Engineering Interest').init();

    d3.select('.container').append('div').html(str).select('figure').attr('id', 'second');

    const model = new FreqDistModel(data).group('group');

    new FreqDistTable(model, 'second', 'group', 'Table 1.2, Participant Totals', 'Strong, E. K., Jr. Nineteen-year followup of engineer interests. J. appl. Psychol., 1952, 36, 65-74.').init();
  });
});
