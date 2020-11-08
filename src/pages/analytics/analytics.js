import '../../vendor/normalize.css';
import '../index/index.css';

import { Statistics } from '../../js/components/Statistics'
import {title, headers, weekNews, container} from '../../js/constants/constants.js'

const statistics = new Statistics(title, headers, weekNews, container);
statistics.setGeneralInfo();