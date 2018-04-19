'use strict';
import ClassificationTable from '../../views/Classification-Table';
import FrequencyModel from '../../models/Frequency-Model';

const d3 = require('../../lib/d3.custom.min.js');

const model = new FrequencyModel(['defectiveDimensions', 'nonDefectiveDimensions'], ['porous', 'nonPorous']);

new ClassificationTable('.container', model.init(), ['Porous', 'Non-Porous', 'With defective dimensions', 'Without defective dimensions'], 'Classification of 6805 moulded pieces of vulcanite.<br>Frequencies in per cent.').init();
