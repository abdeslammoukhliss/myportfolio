import { Global } from '@emotion/react'

import CSSReset from './CSSReset'

const darkTheme = {
  backgroundColor: '#1A202C',
  textColor: 'rgba(255, 255, 255, 0.92)',
  headerBackground: 'rgba(26, 32, 44, .8)',
  toggleHoverBackground: 'rgba(255, 255, 255, 0.16)',
  primary: '#c8c0f6',
}

const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#1A202C',
  headerBackground: 'rgba(247, 250, 252, .8)',
  toggleHoverBackground: '#E2E8F0',
  primary: '#7b61ff',
}

const fontPrimary = 'Montserrat, sans-serif'

export const GlobalStyles = () => {
  return (
    <>
      <CSSReset />
      <Global
        styles={{
          ':root': {
            '--font-primary': fontPrimary,
            '--line-height-base': '1.5',
          },
          '[data-theme="dark"]': {
            '--background-color': darkTheme.backgroundColor,
            '--text-color': darkTheme.textColor,
            '--primary-color': darkTheme.primary,
            '--header-background': darkTheme.headerBackground,
            '--toggle-hover-background': darkTheme.toggleHoverBackground,
            '--active-nav-item-color': darkTheme.primary,
          },
          '[data-theme="light"]': {
            '--background-color': lightTheme.backgroundColor,
            '--text-color': lightTheme.textColor,
            '--primary-color': lightTheme.primary,
            '--header-background': lightTheme.headerBackground,
            '--toggle-hover-background': lightTheme.toggleHoverBackground,
            '--active-nav-item-color': lightTheme.primary,
          },
          // base
          body: {
            fontFamily: 'var(--font-primary)',
            color: 'var(--text-color)',
            backgroundColor: 'var(--background-color)',
            transitionProperty: 'background-color',
            transitionDuration: '200ms',
            WebkitTextSizeAdjust: '100%',
            lineHeight: 'var(--line-height-base)',
          },
        }}
      />
    </>
  )
}

export default GlobalStyles
