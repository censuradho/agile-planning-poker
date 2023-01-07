import NextHead from 'next/head'
import { HeadProps } from './types'

export function Head (props: HeadProps) {
  const {
    description,
    title,
    image = 'https://lh3.googleusercontent.com/fife/AAbDypBJeRuhBlOYRXo_W94bZ6mHYDLTQZTE35rPTxsjrDZ-Jx0gPYaZkqtEaQBtzmJ_8Vd1D-maJK0ifn36iB8wtxKOdvbsZ_KNG0pTSzfQBZMizgZRaaaW4M5oXkYstLlOIyIZ35FRrXzfm2iOIWy3cN3tpHj5_G8w42JQqe1JyG1btr7Q3jZ7rXLe5soo_zyP4_HeJyyLg72E7qPBIA_fe9e9itg1hPXu6FkkCXAI9AUUd-Ny9Bg0Q1S0BUmk4DR1LE7VwpGsRuUOtub92IvSzQdBiH_0aLUN4iXzrN0TYo3vdx6oUha0WFnW2uflnt2CWAPeVPAek2_oJorZY6S4XJM7UPApyOdxk5qcqq_X2O9yCmNHO5Qv0ojz74QQ98Pbtk8YsMIKQQTz5Q-KCOpfZFl35tgmBUpxFyitZN8X3SQL0sKw_MhjynBJPPYjpBn8Ox1igkLVM7mOV0GjUV5ps_GwBYalF4xliQsyrhe666ilK3W0NnS5dC8wSYeYDVj8Jw_VHRrxF0rMyRdFLLiQU9H7I_WTQvC7dUE1D2iZSlELCmJSUZUgC0ZsqOAL5U6IYyqIHddqTo2r2gWPGo-sgFx8YC3jgKa6xUZ_yo5L3B_3BaEISOhTsQ4ZtSaOrWoch0wB1pP7ivrFJ02JLS_2sM4RKbkUSzsQkbpetEP72Uv5iYEZ-xUrogV_JglvAUM_2xbWzU3Ko2mfsmnVTfPIEcGSUxN4IkCWaRmBi91qTinVe-JlgLTuyWasqW72_g1B4khlemdZ5ZWF-2SR_dqz--CqfgIe9OIvsBCe6tCVvpv1Cjihr7U1PkUh4LH2jqK9IELMcha7xHvZXQJrnb0FIZYE3OSE2GZbA4iZ8QbdxGEv3Rwviy2KoBx1AYYhAlwxjP-8wmGeVuDz2LBgDAl3ZMrtVuo4eY3H4SylW8N62RzMDsVwHXe3oeNTH3rgxLcv-k7fISzlxzkcNMTlrACSVN96kDZmjtf8rhjbgMsz2vAo2SiqLjYaATKuHSdAURbkimB71coPr2vgNtbYB1nnQ4VE1KFfr2jrgD7zMBLsoXIMeE-3m9GcNLyydMqIoh-LxgK5-Su6yWJpMP7MspuXICL6KhTsXwSNCnBydNdKZqCYj6X8VzIZwIa3yOW2ebqOJAUxjuOvjDZUtRZwiLw-HpPWBayTu1gzMK-IKsqxWZEsCyLN7HGvjpsK9HWEjUQ_oPuYruygo3FVCbT-3C9lMzbY3Ofym5a441Hcl0DiC6ygFzhDIZTrNU5KDkXOLCR9oKGmc_K_qUw1xFqxtsdk3W7136kzK44WQP5TcK2s-4Cz5vwsPAjbV7sG1IFowPKb3OG2bsLUXISzzm4dkpt2X3vixzgWiyeMQ61XjK5OhJ1_RW9Zl5apTy4d9L7mIqwGMtBGZk2IKB8Q489c5khabg-AhaR7APhkPYgKh_fmmHqTZXBWzfzWAoFxJiNUlkB0Ib9TE5kqBM890No0YFbn3N3scgb381l8dua5UfksOHo-Dj6ep4i7SIfIEGcS=w1920-h929',
    og,
    twitter
  } = props

  const twitterMeta = {
    description: twitter?.title || title,
    image: twitter?.image || image,
    title: twitter?.title || title
  }

  const ogMeta = {
    description: og?.description || description,
    title: og?.title || title,
    image: og?.image || image
  }

  return (
    <NextHead>
      <title>{title}</title>
      {description && <meta name="description" content={description}/>}
      <meta name="language-lp" content="pt-BR" />
      <meta property="og:locale" content="pt-BR" />
      <meta property="og:type" content="article" />
      {ogMeta.title && <meta property="og:title" content={ogMeta.title} />}
      {ogMeta.description && <meta property="og:description" content={ogMeta.description} />}
      {ogMeta.image && <meta property="og:image" content={ogMeta.image} />}
      <meta name="twitter:card" content="summary" />
      {twitterMeta.title && <meta property="twitter:title" content={twitterMeta.title} />}
      {twitterMeta.image && <meta property="twitter:image" content={twitterMeta.image} />}
      {twitterMeta.description && <meta property="twitter:description" content={twitterMeta.description} />}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </NextHead>
  )
}
