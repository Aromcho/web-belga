import React from 'react';
import { observer } from 'mobx-react-lite'
import { useStore } from 'stores';

export const Menu = observer(() => {

  const {
    rootStore: { userStore }
  } = useStore();

  return (
    <div>
    </div>
  )
})