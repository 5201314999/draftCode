import eye from './icons/svg/eye';
import {sum} from './js/util';


window.body.append(`<div id="test">${sum(1,10,100)} ${performance.now()}</div>`);
window.body.append(`<svg>
<use xlink:href="eye"></use>
</svg>`);
