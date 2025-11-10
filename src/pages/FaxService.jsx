const FaxService = () => {
  return (
    <div style={{borderRadius: "12px", border: "1px solid #ccc"}}>
    <section className="fax-service" >
      <h2>FAX送受信サービス</h2>
      <div className="fax-service-box">
        <p><strong>FAX送信：</strong>1枚 10円</p>
        <p><strong>FAX受信：</strong>1000枚/月まで無料。以降 1枚10円。</p>
      </div>
      <ul>
        <li>FAX送信は法人登録証等提出後3営業日から利用可能です。</li>
        <li>毎月末にFAX送受信枚数を集計し、翌月末にご請求します。</li>
        <li>送信後のキャンセルはできません。</li>
        <li>解約は2ヶ月前までに申請が必要です。</li>
      </ul>
      <button>サービスのご紹介</button>
    </section>
    </div>
  );
};

export default FaxService;
