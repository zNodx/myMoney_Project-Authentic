import { combineReducers } from "redux";
import {  reducer as formReducer } from "redux-form";
import { reducer as toastrReducer, toastr } from "react-redux-toastr";
import DashBoardReducer from '../dashboard/dashboardReducers'
import tabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers ({
    dashboard: DashBoardReducer,
    tab: tabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr:toastrReducer
})

export default rootReducer