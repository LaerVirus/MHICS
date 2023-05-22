import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import './custom.css'
import { RingPage } from './components/RingPage';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Router>
                <Routes>
                    <Route path='/' element={<h1>Добро пожаловать в магазин колец</h1>} />
                    <Route path='/RingsPage' element={<RingPage />} />
                    <Route path='/About' element={
                        <h2>ЧАСТНОЕ ТОРГОВОЕ УНИТАРНОЕ ПРЕДПРИЯТИЕ 'ПЛАТИНА-ГРУП' Республика Беларусь, г. Минск ул. Сурганова, 29-11/12 Свидетельство о регистрации выдано 03.03.2006 г. Мингорисполкомом. УНП 190696758. Дата регистрации в Торговом реестре РБ: 08.05.2020 г.</h2>
                    } />
                </Routes>
            </Router>
      </Layout>
    );
  }
}
