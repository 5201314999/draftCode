export default function (Vue) {
  const version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    // 混淆进Vue 原型 beforeCreate 钩子，挂载到Vue 实例上的$store 属性上，所有vue 实例都会触发
    Vue.mixin({ beforeCreate: vuexInit })
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit
      _init.call(this, options)
    }
  }

  /**
   * Vuex init hook, injected into each instances init hooks list. 这样子每个实例都能访问到同一个$store，不直接使用prototype， 也许作者是为了保证vue 依然纯净吧
   */
  function vuexInit () {
    const options = this.$options
    // store injection 注入store
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store
    } else if (options.parent && options.parent.$store) {
      // 非根实例。父组件会有，其他情况就是vuex使用方式不对了
      this.$store = options.parent.$store
    }
  }
}
