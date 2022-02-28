import { FC, createContext, useState, useContext } from 'react'
import { enableStaticRendering } from 'mobx-react-lite'
import {
  registerRootStore,
  isRootStore,
  SnapshotInOf,
  fromSnapshot,
} from 'mobx-keystone'

import { RootStore } from './root'
import { UserStore } from './user'
import { rootContext } from 'contexts'

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')

let store: RootStore | null = null

const rootStore = new RootStore({
  userStore: new UserStore({})
})

export const initStore = (snapshot?: SnapshotInOf<RootStore>) => {
  if (typeof window === 'undefined') {
    store = rootStore;
  }
  if (!store) {
    store = rootStore;
  }

  if (snapshot) {
    store = fromSnapshot<RootStore>(snapshot)
  }

  if (!isRootStore(store)) registerRootStore(store)

  return store
}

export const StoreContext = createContext<RootStore | null>(store)

export const StoreProvider: FC<{ snapshot?: SnapshotInOf<RootStore> }> = ({
  children,
  snapshot,
}) => {
  const [ctxStore] = useState(() => initStore(snapshot))
  return (
    <StoreContext.Provider value={ctxStore}>{children}</StoreContext.Provider>
  )
}

export function useStore() {
  const store = useContext(rootContext)

  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store
}

export { RootStore }
