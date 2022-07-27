import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { setTheme } from '../../store/countriesSlice';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import ReactSwitch from 'react-switch';
import variables from '../../styles/variables';

const Theme: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.countries.theme)
  const switchChange = () => {
    theme === light
      ? dispatch(setTheme(dark))
      : dispatch(setTheme(light)) 
  }

  return (
    <ReactSwitch
      onChange={switchChange}
      checked={theme === light}
      uncheckedIcon={false}
      checkedIcon={false}
      height={22}
      width={40}
      onColor={variables.clr_accent_hover}
      offColor={variables.clr_accent_hover}
      onHandleColor={'#fff'}
      offHandleColor={'#fff'}
    /> 
  )
}

export default Theme;