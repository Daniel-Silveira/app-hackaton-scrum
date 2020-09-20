import React, { useEffect } from 'react'
import * as Styled from './styled'
import { useRoute, useNavigation } from '@react-navigation/native'

const BoxModal = props => {
  const { handleGoBack, headerShown, gestureResponseDistance, overlay } = props
  const route = useRoute()
  const size = props.size
  const noReturn = route.params?.noReturn

  const navigation = useNavigation()
  navigation.setOptions({
    headerShown,
    gestureResponseDistance: 100 - size,
    cardStyle: {
      backgroundColor: overlay && 'rgba(0,0,0,.3)',
    },
  })

  let elements = React.Children.toArray(props.children)

  if (elements.length === 1) {
    elements = React.cloneElement(elements[0], { handleGoBack: handleGoBack })
  } else if (elements.length > 0) {
    let lastElement = elements[elements.length - 1]
    elements = [React.cloneElement(elements[0], { handleGoBack: handleGoBack })]
      .concat(elements.slice(1, -1))
      .concat(React.cloneElement(lastElement, { handleGoBack: handleGoBack }))
  }

  return (
    <Styled.BoxConfig>
      <Styled.BackArea onPress={handleGoBack} />
      <Styled.Options height={size}>
        {props.header || (!noReturn && <Styled.Icon onPress={handleGoBack}></Styled.Icon>)}
        {props.children && elements}
      </Styled.Options>
    </Styled.BoxConfig>
  )
}

export default BoxModal
