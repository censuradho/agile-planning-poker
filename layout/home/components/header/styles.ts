import { styled } from 'stitches.config'

export const Header = styled('header', {
  width: '100%',
  backdropFilter: 'blur(5px)',
  position: 'sticky',
  top: 0
})

export const Navigation = styled('nav', {
  width: '100%',
  height: '100vh',
  position: 'fixed',
  top: 0,
  right: 0,
  background: '$background',
  padding: '1rem',

  ul: {
    padding: '0.5rem',

    li: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }
})
