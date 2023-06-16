'use client';
import StyledJsxRegistry from './registry';
import { createGlobalStyle } from 'styled-components';
import metadata from './components/metadata';
import { usePathname } from 'next/navigation';
import VerifyRoutes from './functions/verifyRoutes';
import PrivateRouter from './components/private/privateRouter';
import { QueryClient, QueryClientProvider } from 'react-query';


const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-color: #393e46;
    --secundary-color: #00adb5;
    --terciary-color: #aad8d3;
  }
`;

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname()
  const isPublicPage = VerifyRoutes(path)

  
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
      </head>
      <body>
        <StyledJsxRegistry>
          <GlobalStyles />
          <QueryClientProvider client={queryClient}>
            {isPublicPage && children}
            {!isPublicPage && (
              <PrivateRouter>{children}</PrivateRouter>
            )}
          </QueryClientProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
