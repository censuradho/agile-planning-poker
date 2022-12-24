import { styled } from 'stitches.config'

export const Container = styled('div', {

})

export const Main = styled('main', {
  width: '100%'
})

export const Section = styled('section', {
  height: '100vh',
  width: '100%',
  display: 'flex'

})

export const Box1 = styled('div', {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  padding: '7rem 1rem',
  h1: {
    textAlign: 'center',
    fontSize: '$xlg',
    color: '$heading',

    '@laptops-min': {
      textAlign: 'left',
      maxWidth: '30rem'
    }
  },

  p: {
    textAlign: 'center',

    '@laptops-min': {
      textAlign: 'left',
      maxWidth: '30rem'

    }
  },
  '* >': {
    textAlign: 'center'
  },

  '@laptops-min': {
    padding: '1rem',
    height: '70%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center'
  }
})
