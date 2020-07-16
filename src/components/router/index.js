import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Splash, Heroes} from '../pages';

export default function App(props) {
  return (
    <Router>
      <Stack key="root">
        <Scene key="Splash" component={Splash} initial hideNavBar />

        <Scene key="Heroes" component={Heroes} title="Heroes" />
      </Stack>
    </Router>
  );
}
