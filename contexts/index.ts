import React from 'react';
// import { createContext } from 'mobx-keystone';

import { RootStore } from 'stores';
import { UserStore } from 'stores/user';

// export const mobxRootContext = createContext<RootStore>();

export const rootContext = React.createContext({
  rootStore: new RootStore({
    userStore: new UserStore({})
  })
})
