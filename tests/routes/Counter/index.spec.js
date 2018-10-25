import ProjectRoute from 'routes/Project'

describe('(Route) Project', () => {
  it('returns a route configuration object', () => {
    expect(typeof ProjectRoute({})).to.equal('object')
  })

  it('has a path \'project\'', () => {
    expect(ProjectRoute({}).path).to.equal('project')
  })
})
