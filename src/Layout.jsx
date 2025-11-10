import { useState, useEffect } from 'react';
import { menuConfig } from './menuConfig';
import './css/Layout.css';

const Layout = ({ children, onLogout }) => {
    const [activeMenu, setActiveMenu] = useState('トップ');
    const [activeSubMenu, setActiveSubMenu] = useState('FAX受信');
    const [isOpen, setIsOpen] = useState(false);

    const handleAccountClick = (e) => {
        e.stopPropagation(); // 親へのクリックイベント伝播を防止
        setIsOpen((prev) => !prev);
    };

    const handleMenuClick = (e) => {
        e.stopPropagation(); // メニュー内クリックでは閉じない
    };

    // ドキュメント全体クリックで閉じる
    useEffect(() => {
        const handleOutsideClick = () => setIsOpen(false);
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className="layout-container">
            <header className="header">
                <h1>Snap Storage</h1>
                <div className="account-area">
                    <div
                        className="account-name"
                        onClick={handleAccountClick}
                    >
                        テスト名
                    </div>
                    {isOpen && (
                        <div className="dropdown-menu" onClick={handleMenuClick}>
                            <button onClick={() => alert('お問い合わせフォームへ')}>お問合せ</button>
                            <button onClick={onLogout}>ログアウト</button>
                        </div>
                    )}
                </div>
                {/* <div className="header-buttons">
                <button>利用者設定</button>
                <button>事業所設定</button>
                </div> */}
            </header>

            <nav className="main-menu">
                {Object.keys(menuConfig).map((menu) => (
                    <button
                        key={menu}
                        className={menu === activeMenu ? 'active' : ''}
                        onClick={() => {
                            setActiveMenu(menu);
                            // メインメニュー切替時はサブメニューも初期化
                            setActiveSubMenu(menuConfig[menu][0].label);
                        }}
                    >
                        {menu}
                    </button>
                ))}
            </nav>

            <div className="content-wrapper">
                <div className="sidebar">
                    {menuConfig[activeMenu].map((submenu) => (
                        <button
                            key={submenu.label}
                            className={submenu.label === activeSubMenu ? 'active' : ''}
                            onClick={() => {
                                setActiveSubMenu(submenu.label);
                            }
                            }
                        >
                            {submenu.label}
                        </button>
                    ))}
                </div>

                <main className="main-content">
                    {children(activeMenu, activeSubMenu)}
                </main>
            </div>
        </div>
    );
};

export default Layout;
