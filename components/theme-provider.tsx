'use client'
import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      enableSystem        // auto-detects Android system dark/light mode
      disableTransitionOnChange  // prevents paint lag on theme switch
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
