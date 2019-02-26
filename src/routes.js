import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

const HomePage = () => (
    <div>
        <h1>Home</h1>
        <Link to="/contato">Ir para contato</Link>
    </div>
)
const ContatoPage = () => (
    <div>
        <h1>Contato</h1>
        <Link to="/">Ir para home</Link>
    </div>
)

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contato" component={ContatoPage} />
    </Switch>
)


export default Routes