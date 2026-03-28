import localFont from 'next/font/local'
import type { AppProps } from 'next/app'

const myFonts = localFont({
    src: './fonts/LibreBodoni-VariableFont_wght.ttf',
    variable: '--font-libre-bodoni',
    weight: '100 900',
})

export default myFonts;