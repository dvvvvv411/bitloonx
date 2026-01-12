
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/user/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import Index from "./pages/Index";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="casino-theme">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
