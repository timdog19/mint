import React from 'react'
import PropTypes from 'prop-types'
export const NavigationContext = React.createContext()
const NavigationContextProvider = ({ children }) => {
  const [navigation, setNavigation] = React.useState('home')
  return <NavigationContext.Provider value={{ navigation, setNavigation }}>{children}</NavigationContext.Provider>
}
NavigationContextProvider.propTypes = {
  children: PropTypes.object,
}
export default NavigationContextProvider
export const useNavigation = () => React.useContext(NavigationContext)
