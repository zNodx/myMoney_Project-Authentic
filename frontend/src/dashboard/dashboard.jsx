import React, {Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardAction'
import ValueBox from '../common/widget/valueBox'

class Dashboard extends Component {
    componentWillMount(){
        this.props.getSummary()
    }
    render() {
        const { credit, debt} = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos'/>
                    <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`}  text='Total de Débito'/>
                    <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Total de Consolidado'/>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

