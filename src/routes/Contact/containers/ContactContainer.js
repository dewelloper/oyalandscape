import { connect } from 'react-redux'
import Contact from '../components/Contact'


const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
    Contact : state.contact
})



export default connect(mapStateToProps, mapDispatchToProps)(Contact)
