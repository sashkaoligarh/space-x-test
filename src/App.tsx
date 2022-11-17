import React, { FC } from 'react';
import './App.css';
import { LaunchesProvider } from './context/launch.context';
import RootNavigator from './router';
import { Header } from './components';


const App: FC = () => {
  return (
      <LaunchesProvider>
        <Header/>
        <RootNavigator />
      </LaunchesProvider>
  );
};

export default App;
