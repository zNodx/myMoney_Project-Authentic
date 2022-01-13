import { combineReducers } from "redux";
import {  reducer as formReducer } from "redux-form";
import { reducer as toastrReducer, toastr } from "react-redux-toastr";
import DashBoardReducer from '../dashboard/dashboardReducer'
import tabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers ({
    dashboard: DashBoardReducer,
    tab: tabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr:toastrReducer,
    auth: AuthReducer
})

export default rootReducer