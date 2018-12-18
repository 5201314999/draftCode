
function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var _ = _.default;
        let element = document.createElement('div');
        element.innerHTML = _.join(['hello', 'wepack'], '  ');
        return element;
    }).catch(err => 'An error occurred while loading the component');
}


getComponent().then(element => {
    document.body.appendChild(element);
});