import { memo } from 'react'
import Loader from 'public/icons/loader.svg'

import { Icon, Typography } from 'components/common'

import Link from 'next/link'
import * as Styles from './styles'

import { ButtonProps } from './types'

function BaseButton (props: ButtonProps) {
  const { children, icon, loading, disabled, href, type, as, ...otherProps } =
    props

  const renderLoading = () => {
    if (!loading) return null

    return (
      <Styles.LoaderContainer>
        <Loader />
      </Styles.LoaderContainer>
    )
  }

  const renderButton = () => (
    <Styles.Button
      type={type}
      disabled={disabled || loading}
      {...otherProps}
    >
      {icon && <Icon {...icon} />}
      <Typography>{children}</Typography>
      {renderLoading()}
    </Styles.Button>
  )

  const renderContent = () => {
    if (as === 'a' && href) {
      return <Link href={href}>{renderButton()}</Link>
    }

    return renderButton()
  }

  return renderContent()
}

export const Button = memo(BaseButton)
