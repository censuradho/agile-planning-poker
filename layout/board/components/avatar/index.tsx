import Image from 'next/image'

import { Typography } from 'components/common'
import * as Styles from './styles'
import { AvatarProps } from './types'

export function Avatar (props: AvatarProps) {
  const {
    alt,
    src,
    size = 40
  } = props

  const renderAlt = () => {
    if (src) return null
    const lastPosition = alt.lastIndexOf(' ')

    const alternativeText = alt.substring(lastPosition + 1, lastPosition + 2)

    return (
      <Typography color="heading">{alternativeText}</Typography>
    )
  }

  const renderImage = () => {
    if (!src) return null

    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    )
  }

  return (
    <Styles.Container style={{ width: size, height: size }}>
      {renderAlt()}
      {renderImage()}
    </Styles.Container>
  )
}
