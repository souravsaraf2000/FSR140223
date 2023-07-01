"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

const store = configureStore({
  reducer: rootReducer
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store = {store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}