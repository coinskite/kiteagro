"use client";

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

function ClientWrapper({ children }: readOnlyChildren) {
  return (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  )
}

export default ClientWrapper