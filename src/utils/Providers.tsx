import { ReactNode } from 'react';
import { Provider as JotaiProvider, useAtomValue } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <JotaiProvider>
        {children}
      </JotaiProvider>
    </QueryClientProvider>
  );
}
