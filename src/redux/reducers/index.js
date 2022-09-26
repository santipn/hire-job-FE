import { combineReducers } from 'redux'
import Users from '../reducers/Users'
const rootReducers = combineReducers({
    users: Users,
})
export default rootReducers