import { styled } from 'stitches.config'

export const Main = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: '25rem',
  strong: {
    fontSize: '$sm',
    color: '$heading'
  }
})
