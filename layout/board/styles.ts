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
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '@laptops-min': {
    justifyContent: 'center'
  }
})

export const Count = styled('strong', {
  fontSize: '$md',
  color: '$heading'
})

export const PlayerName = styled('strong', {
  textAlign: 'center',

  variants: {
    me: {
      true: {
        color: '$heading'
      }
    }
  }
})

export const BoardName = styled('strong', {
  color: '$heading',
  fontWeight: 600,
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
  width: '100px',

  '@smartphone-min': {
    width: '200px'
  },
  '@laptops-min': {
    width: '500px'
  }
})
