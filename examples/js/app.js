'use strict';
import AbsoluteFrequencyTable from '../../views/Absolute-Frequency-Table';
import ClassificationTable from '../../views/Classification-Table';
import FrequencyModel from '../../models/Frequency-Model';

const d3 = require('../../lib/d3.custom.min.js');

const model = new FrequencyModel(['defectiveDimensions', 'nonDefectiveDimensions'], ['porous', 'nonPorous']);
const data = model.init();

new AbsoluteFrequencyTable('.container', data, ['Porous', 'Non-Porous', 'With defective dimensions', 'Without defective dimensions'], 'Classification of 6805 moulded pieces of vulcanite.').init();

new ClassificationTable('.container', data, ['Porous', 'Non-Porous', 'With defective dimensions', 'Without defective dimensions'], 'Classification of 6805 moulded pieces of vulcanite.<br>Frequencies in per cent.').init();
