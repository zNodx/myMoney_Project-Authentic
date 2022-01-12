import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCycleActions";
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from "./itemList";
import Summary from "./summary";
class BillingCycleForm extends Component {

    calculateSummary(){
        const sum = (t,v) => t+v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { sumOfCredits, sumOfDebts} = this.calculateSummary()
        const {handleSubmit,readOnly, credits, debts} = this.props
        return(
             <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput}  readOnly={readOnly}
                       label='Nome' cols='12 4' placeholder='Informe o nome'
                    />
                    <Field name='month' component={labelAndInput}  readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='informe o mês'
                    />
                    <Field name='year' component={labelAndInput}  readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='informe o ano'
                    />
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn" onClick={this.props.init}>Cancelar</button>
                </div>
             </form>
        )
    }
}
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount:false})(BillingCycleForm )
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    debts: selector(state, 'debts'),
    credits:selector(state, 'credits')
})
const mapDispatchToProps = dispatch =>  bindActionCreators({init}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)