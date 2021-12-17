import { BrowserRouter, Switch } from "react-router-dom";
import LayoutRoute from './LayoutRoute.js';
import MainScreen from './MainScreen.js';
import AboutScreen from './About.js';
import ContactScreen from './Contact.js';
import MenuScreen from './MenuCards.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js'

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen} />
                <LayoutRoute path='/about' exact={true} component={AboutScreen} />
                <LayoutRoute path='/contact' exact={true} component={ContactScreen} />
                <LayoutRoute path='/menucards' exact={true} component={MenuScreen} />
                <LayoutRoute path='/registrationscreen' exact={true} component={RegistrationScreen} />
                <LayoutRoute path='/loginscreen' exact={true} component={LoginScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;