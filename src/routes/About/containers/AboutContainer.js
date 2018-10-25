import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/about'
import About from '../components/About'

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
    About : state.about
})



export default connect(mapStateToProps, mapDispatchToProps)(About)
