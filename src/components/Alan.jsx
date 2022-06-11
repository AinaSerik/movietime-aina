import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { fetchToken } from '../utils';
import { ColorModeContext } from '../utils/ToggleColorMode';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: '6f9bd376c83f938ca861fac08f9ef3e62e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode }) => {
        if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light')
          } else {
            setMode('dark')
          }
        } else if(command === 'login') {
          fetchToken();
        } else if(command === 'logout') {
          localStorage.clear();

          window.location.href = '/';
        }
      },
    });
  }, []);
  return (
    <div>Alan</div>
  );
};

export default useAlan;