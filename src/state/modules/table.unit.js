import * as tableModule from './table.js'

describe('@state/modules/table', () => {
  it('exports a valid Vuex module', () => {
    expect(tableModule).toBeAVuexModule()
  })
})
