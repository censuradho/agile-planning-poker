import { useAuth } from 'context/auth'

import { ComponentType, useEffect } from 'react'
import { useRouter } from 'next/router'
import { paths } from 'constants/routes'

// eslint-disable-next-line max-len
export const withAuthorization = <P extends object>(Component: ComponentType<P>) => function (props: P) {
  const auth = useAuth()

  const router = useRouter()

  if (auth?.isLoading) return null

  useEffect(() => {
    if (!auth?.isSigned && !auth?.isLoading) {
      router.push(paths.home)
    }
  }, [auth, router])

  return <Component {...props} />
}
