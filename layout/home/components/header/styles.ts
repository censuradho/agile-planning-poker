import { styled, keyframes } from 'stitches.config'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateX(100%)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

export const Header = styled('header', {
  width: '100%',
  backdropFilter: 'blur(5px)',
  position: 'sticky',
  top: 0,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between'
})

export const Overlay = styled(AlertDialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backdropFilter: 'blur(5px)',
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

export const Root = styled(AlertDialog.Root, {
  width: '100%'
})

export const Portal = styled(AlertDialog.Portal, {})

export const Trigger = styled(AlertDialog.Trigger, {})

export const Cancel = styled(AlertDialog.Cancel, {})

export const Content = styled(AlertDialog.Content, {
  backgroundColor: 'tomato',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: 0,
  right: 0,
  width: '70%',
  height: '100vh',
  animation: `${contentShow} 0.3s cubic-bezier(0.16, 1, 0.3, 1)`,
  background: '$background',
  padding: '1rem',

  '&:focus': {
    outline: 'none'
  }
})

export const List = styled('ul', {
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})
