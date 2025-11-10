import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Layout from './Layout';
import FaxService from './pages/FaxService';
import Top from './pages/Top';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* ログインページ */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />

        {/* 認証が必要なLayout */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout
                onLogout={() => {
                  alert("ログアウトしました");
                  setIsAuthenticated(false);
                }}
              >
                {(activeMenu, activeSubMenu) => {
                  if (activeMenu === 'トップ' && activeSubMenu === 'FAX受信') {
                    return <Top />;
                  } else if (activeMenu === 'FAX' && activeSubMenu === '基本情報') {
                    return <FaxService />;
                  }
                  return <>
                    {activeMenu} - {activeSubMenu}
                  </>
                }}
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;