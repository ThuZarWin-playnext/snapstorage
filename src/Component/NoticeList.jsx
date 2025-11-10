export default function NoticeList() {
    const notices = [
        {
            date: '2025.06.08',
            title: '事務連絡',
            content: '運営会社の電話番号が変わりました。',
            isNew: true,
        },
        {
            date: '2025.06.07',
            title: '※新機能リリース※',
            content: '〇〇ができるようになりました。',
        },
        {
            date: '2025.06.06',
            title: '※新機能リリース※',
            content: '〇〇ができるようになりました。',
        },
    ];

    return (
        <ul style={{listStyle: "none", padding: "0", margin: "0"}}>
            {notices.map((n, i) => (
                <li key={i} style={{noticeDisplay: "flex", alignItems: "center", padding: "12px 0", borderBbottom: "1px solid #eee"}}>
                    <div style={{noticeWidth: "100px", color: "#888"}}>{n.date}</div>
                    <div style={{flex: "1"}}>
                        <strong>{n.title}</strong>
                        <p>{n.content}</p>
                    </div>
                    {n.isNew && <span style={{background: "#ffda00",color: "black", adding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold"}}>NEW</span>}
                </li>
            ))}
        </ul>
    );
}
