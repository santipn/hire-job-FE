import { combineReducers } from 'redux'
import Users from '../reducers/users'
const rootReducers = combineReducers({
    users: Users,
})
export default rootReducers