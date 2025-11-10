import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./css/Login.css";

function Login({ onLogin }) {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Enterキー押下でログイン
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const handleLogin = () => {
        // 仮の認証処理
        if (id === "user" && pass === "pass") {
            // alert("ログイン成功！");
            onLogin();          // 認証状態をAppで更新
            navigate('/snapstorage');
        } else {
            setError("IDまたはPASSが正しくありません。");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="title">Snap Storage</h1>

                <div className="login-box">
                    <div className="form-group">
                        <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="ID"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="pass"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="PASS"
                        />
                    </div>

                    {error && <div className="error-msg">{error}</div>}

                    <div className="options">
                        <input type="checkbox" style={{ width: "16px", height: "16px" }} />
                        <div>
                            PASSを端末に保存
                        </div>
                    </div>

                    <div className="contact-link">お問合せはこちら</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
