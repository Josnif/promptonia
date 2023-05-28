import '@styles/global.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'Jot-Prompt',
  description: 'Discover and Generate Prompts',
}

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body className='dark:bg-gray-700 dark:text-gray-200'>
          <div className='main'>
              <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </body>
      </html>
    </Provider>
  )
}
