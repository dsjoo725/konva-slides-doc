import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SongPage from "@/pages/song";
import SongIdPage from "@/pages/song/[id]";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // 실패한 쿼리를 재시도하지 않습니다.
        staleTime: 1000 * 60 * 60, // 쿼리 데이터가 1시간 동안 fresh 상태로 유지합니다.
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/song" element={<SongPage />} />
          <Route path="/song/:id" element={<SongIdPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
