import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import LoginView from './routes/loginView';
import DashboardView from './routes/dashboardView';
import SignOutView from './routes/signOutView';
import PublicProfileView from './routes/publicProfileView';
import ChooseUsernameView from './routes/chooseUsernameView';
import EditProfileView from './routes/editProfileView';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='Login' element={<LoginView />} />
      <Route path='Dashboard' element={<DashboardView/>} />
      <Route path='Signout' element={<SignOutView/>} />
      <Route path='u/:username' element={<PublicProfileView/>} />
      <Route path='EditProfileView' element={<EditProfileView/>} />
      <Route path='choose-username' element={<ChooseUsernameView/>} />
    </Routes>
  </BrowserRouter>
);
