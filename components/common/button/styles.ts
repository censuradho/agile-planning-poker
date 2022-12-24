import { styled } from 'stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',

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
      stroke: {
        background: 'none',
        border: '1px solid $foregroundActive',
        padding: '0.3rem 1rem',
        borderRadius: '3px',

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
