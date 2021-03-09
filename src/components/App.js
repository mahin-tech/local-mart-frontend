import React from 'react'
import { history } from '../history'
import { Router, Route, Switch } from 'react-router-dom'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Product from '../components/product/Product'
import { connect } from 'react-redux'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/product' exact component={Product} />
                </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps)(App)