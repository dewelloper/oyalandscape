import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'contact',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Contact = require('./containers/ContactContainer').default
      const reducer = {} //require('./modules/contact').default

      injectReducer(store, { key: 'contact', reducer })

      cb(null, Contact)

    }, 'contact')
  }
})
