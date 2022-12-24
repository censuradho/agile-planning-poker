import { styled } from 'stitches.config'

export const Container = styled('div', {
  variants: {
    flexDirection: {
      column: {
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      },
      'column-reverse': {
        flexDirection: 'column-reverse'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      },
      revert: {
        flexDirection: 'revert'
      },
      unset: {
        flexDirection: 'unset'
      }
    }
  }
})
