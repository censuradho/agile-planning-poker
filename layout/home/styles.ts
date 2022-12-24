import { styled } from 'stitches.config'

export const Container = styled('div', {

})

export const Main = styled('main', {
  width: '100%'
})

export const Section = styled('section', {
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column'

})

export const Box1 = styled('div', {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  h1: {
    textAlign: 'center',
    fontSize: '$xlg'
  },

  p: {

  },
  '* >': {
    textAlign: 'center'
  }
})
