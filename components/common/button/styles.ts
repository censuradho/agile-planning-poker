import { styled } from 'stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',
  borderRadius: '3px',

  '&:disabled': {
    background: '$primaryDark'
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    variant: {
      primary: {
        background: '$primary',
        padding: '1rem',
        '&:hover': {
          background: '$primaryActive'
        },
        '> *': {
          color: '$heading'
        }
      },
      stroke: {
        background: 'none',
        border: '1px solid $foregroundActive',
        padding: '0.3rem 1rem',

        '&:hover': {
          background: '$foregroundActive'
        },
        '> *': {
          color: '$white',
          fontSize: '$xsm'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const LoaderContainer = styled('div', {
  position: 'absolute',

  svg: {
    width: '36px'
  }
})
