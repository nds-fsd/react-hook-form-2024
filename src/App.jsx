import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import RegisterForm from './pages/reactHookForm/reactHookForm';
import Register from './pages/registerHtml/registerHtml';
import NoMatch from './pages/noMatch/noMatch';
import User from './pages/user/user';
import Layout from './components/layout';
import Home from './pages/home/home';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="registerForm" element={<RegisterForm />} />
            <Route path="user/:userName/:id" element={<User />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
