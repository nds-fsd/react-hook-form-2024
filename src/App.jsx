import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import RegisterForm from './pages/reactHookForm/reactHookForm';
import Register from './pages/registerHtml/registerHtml';
import NoMatch from './pages/noMatch/noMatch';
import User from './pages/user/user';
import Layout from './components/layout';
import Home from './pages/home/home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { getUserToken } from './utils/localStorage.utils';
import Login from './pages/login/login';
import RefExample from './pages/refExample/refExample';
import MemoExample from './pages/memoExample/memoExample';
import CallbackExample from './pages/callbackExample/callbackExample';

const queryClient = new QueryClient();

function App() {
  const [forceUpdate, setForceUpdate] = useState(false);
  

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout forceUpdate={() => setForceUpdate(!forceUpdate)} />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login forceUpdate={() => setForceUpdate(!forceUpdate)} />} />
            <Route path="registerForm" element={<RegisterForm />} />
            <Route path="ref" element={<RefExample />} />
            <Route path="memo" element={<MemoExample />} />
            <Route path="callback" element={<CallbackExample />} />
            <Route path="user/:userName" element={<User />} />

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
