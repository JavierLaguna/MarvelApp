import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import {Splash, Heroes, HeroDetail, CreateHero} from '../pages';
import colors from '../../assets/colors';

export default function App(props) {
  return (
    <Router>
      <Stack key="root">
        <Scene key="Splash" component={Splash} initial hideNavBar />

        <Scene
          key="Heroes"
          component={Heroes}
          title="Heroes"
          titleStyle={{color: colors.main}}
          rightTitle="New"
          rightButtonTextStyle={{color: colors.main}}
          onRight={() => {
            Actions.push('CreateHero');
          }}
        />

        <Scene
          key="HeroDetail"
          component={HeroDetail}
          titleStyle={{color: colors.main}}
          backButtonTintColor={colors.main}
          backButtonTextStyle={{color: colors.main}}
        />

        <Scene
          key="CreateHero"
          component={CreateHero}
          title="New Hero"
          titleStyle={{color: colors.main}}
          backButtonTintColor={colors.main}
          backButtonTextStyle={{color: colors.main}}
        />
      </Stack>
    </Router>
  );
}
