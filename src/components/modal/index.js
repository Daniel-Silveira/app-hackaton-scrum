import React, { useState } from 'react'
import * as Styled from './styled'
import { useNavigation, useRoute } from '@react-navigation/native'

const Modal = ({setVertical}) => {
  const { goBack, navigate } = useNavigation()
  const {
    params: { component: Component, action, noReturn },
  } = useRoute()

  const handleGoBack = () => {
    goBack()
    action && action()
  }

  return (
    <Styled.Clicable onRequestClose={goBack} transparent={true}>
      {Component && (
        <Component handleGoBack={handleGoBack} setVertical={setVertical} noReturn={noReturn} navigate={navigate} />
      )}
    </Styled.Clicable>
  )
}

export default Modal
