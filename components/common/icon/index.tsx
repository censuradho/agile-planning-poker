import { memo } from 'react'
import { theme } from 'stitches.config'
import { icons } from './icons'

export type IconNames = keyof typeof icons

type Colors = keyof typeof theme['colors']

interface IconProps {
  name: IconNames;
  size?: number;
  color?: Colors;
  customColor?: string
}

function BaseIcon ({ name, color, customColor, ...props }: IconProps) {
  const Component = icons?.[name]

  const fill = customColor || (color && theme?.colors[color].value)

  return (
    <Component
      size={20}
      {...props}
      style={{
        ...(fill && { fill })
      }}
    />
  )
}

export const Icon = memo(BaseIcon)
