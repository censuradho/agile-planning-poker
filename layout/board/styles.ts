import { styled } from 'stitches.config'

export const Container = styled('div', {

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
  width: '100%',
  height: '100%',
  padding: '1rem'
})

export const IssueLabel = styled('span', {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '300px'

})
