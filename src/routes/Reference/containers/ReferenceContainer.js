import { connect } from 'react-redux'
import Reference from '../components/Reference'


const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
    Reference : state.reference
})



export default connect(mapStateToProps, mapDispatchToProps)(Reference)
