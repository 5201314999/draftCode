/**
 * 使用await 来编写异步代码
 */
async function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var _ = _.default;
        let element = document.createElement('div');
        element.innerHTML = _.join(['hello', 'wepack'], '  ');
        return element;
    }).catch(err => 'An error occurred while loading the component');
}

const e=getComponent();
document.body.appendChild(e);
