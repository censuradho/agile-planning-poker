import { styled } from 'stitches.config'

export const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
})

export const Header = styled('header', {
  width: '100%',
  minHeight: '3.375rem',
  borderBottom: '1px solid $foregroundActive',
  display: 'flex',
  alignItems: 'center',
  padding: '0 1rem'
})

export const Main = styled('main', {
  flex: 1,
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column'
})

export const IssueLabel = styled('span', {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '300px'

})

export const Hand = styled('div', {
  marginTop: 'auto',

  '@laptops-min': {
    display: 'flex',
    justifyContent: 'center'
  }
})
