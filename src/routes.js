import { Switch, Route } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import MessagePage from './components/pages/MessagePage';
import UsersPage from './components/pages/UsersPage';
import AddMessage from './components/pages/AddMessage';
import Login from './components/pages/Login';
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";

/* 
message page
users page
add message page
login page
register page
wrap main component */

/* 
MessagePage
UsersPage
AddMessage
Login
Register
*/
 
export default function Routes() {
    return (
        <Switch>
            
            <Route path="/" exact >
                <MainLayout>
                    <Route component={Home}/>
                </MainLayout>
              </Route>

        { /*   <Route path="/MessagePage" exact >
                <MainLayout>
                    <Route component={MessagePage}/>
                </MainLayout>
              </Route>

            <Route path="/UsersPage" exact>
            <MainLayout>
                    <Route component={UsersPage}/>
                </MainLayout>
            </Route>
            
            <Route path="/AddMessage" exact >
                <MainLayout>
                    <Route component={AddMessage}/>
                </MainLayout>
              </Route>
            

            <Route path="/Login" exact>
            <MainLayout>
                    <Route component={Login}/>
                </MainLayout>
            </Route>

            <Route path="/Register" exact >
                <MainLayout>
                    <Route component={Register}/>
                </MainLayout>
              </Route> 

            {/* <Route path="/Author/:id" exact >
                <MainLayout>
                    <Route component={Author}/>
                </MainLayout>
              </Route> */}
        </Switch>
        )
}