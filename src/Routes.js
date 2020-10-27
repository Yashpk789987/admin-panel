import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './containers/Auth/Login'
import ForgotPassword from './containers/Auth/ForgotPassword'
import ResetPassword from './containers/Auth/ResetPassword'
import CompanyProfile from './containers/Onboarding/CompanyProfile'
import ImportProducts from './containers/Onboarding/ImportProducts'
import ImportCustomers from './containers/Onboarding/ImportCustomers'
import ImportTeam from './containers/Onboarding/ImportTeam'
import Regions from './containers/Onboarding/Regions'
import Products from './containers/Products'
import ProductDetail from './containers/Products/ProductDetail'
import ArchivedProducts from './containers/Products/ArchivedProducts'
import Customers from './containers/Customers'
import ArchivedCustomers from './containers/Customers/ArchivedCustomers'
import Team from './containers/Team'
import ArchivedTeam from './containers/Team/ArchivedTeam'
import Leads from './containers/Leads'
import Sales from './containers/Sales'
import CustomerDetail from './containers/Customers/CustomerDetail'
import TeamDetail from './containers/Team/TeamDetail'
import OrgChart from './containers/Team/OrgChart'
import Chat from './containers/Chat'
import RolePermission from './containers/Permission'
import Dashboard from './containers/Dashboard'
import AuthenticatedRoute from "./components/authenticated-route";
import UnauthenticatedRoute from "./components/unauthenticated-route";

function Routes(props) {
  console.log(props, 'routes')
  return (
    <Switch>
      <UnauthenticatedRoute path="/" exact component={Login} />
      <UnauthenticatedRoute path="/forgotpassword" exact component={ForgotPassword} />
      <UnauthenticatedRoute path="/resetpassword" exact component={ResetPassword} />

      <AuthenticatedRoute path="/companyprofile" exact component={CompanyProfile} />
      <AuthenticatedRoute path="/importproducts" exact component={ImportProducts} />
      <AuthenticatedRoute path="/importcustomers" exact component={ImportCustomers} />
      <AuthenticatedRoute path="/importteam" exact component={ImportTeam} />
      <AuthenticatedRoute path="/regions" exact component={Regions} />
      <AuthenticatedRoute path="/dashboard" exact component={Dashboard} />
      <AuthenticatedRoute path="/products" exact component={Products} />
      <AuthenticatedRoute path="/productdetail" exact component={ProductDetail} />
      <AuthenticatedRoute path="/productsarchived" exact component={ArchivedProducts} />
      <AuthenticatedRoute path="/customers" exact component={Customers} />
      <AuthenticatedRoute path="/archivedcustomers" exact component={ArchivedCustomers} />
      <AuthenticatedRoute path="/team" exact component={Team} />
      <AuthenticatedRoute path="/orgchart" exact component={OrgChart} />
      <AuthenticatedRoute path="/archivedteam" exact component={ArchivedTeam} />
      <AuthenticatedRoute path="/leads" exact component={Leads} />
      <AuthenticatedRoute path="/sales" exact component={Sales} />
      <AuthenticatedRoute path="/customerdetail" exact component={CustomerDetail} />
      <AuthenticatedRoute path="/teamdetail" exact component={TeamDetail} />
      <AuthenticatedRoute path="/rolepermission" exact component={RolePermission} />

      <AuthenticatedRoute path="/profile" exact component={CompanyProfile} profilePage />
      <AuthenticatedRoute path="/chat" exact component={Chat} />
    </Switch>

  );
}

export default Routes;
