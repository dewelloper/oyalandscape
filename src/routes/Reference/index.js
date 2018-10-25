import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'reference',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Reference = require('./containers/ReferenceContainer').default
      const reducer = {} //require('./modules/reference').default

      injectReducer(store, { key: 'reference', reducer })

      cb(null, Reference)

    }, 'reference')
  }
})
