
import NoticeList from "../Component/NoticeList";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import '../css/Top.css';

export default function Top() {
  return (
    <div className="top">
      <div style={{flex: "2", background: "white", padding: "16px",borderRadius: "12px", border: "1px solid #ccc"}}>
        <h3>お知らせ</h3>
        <NoticeList />
       </div>
      <div style={{flex: "1", display: "flex", flexDirection: "column",gap: "10px"}}>
        <img style={{width: "100%", borderRadius: "10px", objectFit: "cover"}} src={image1} alt="image1" />
        <img style={{width: "100%", borderRadius: "10px", objectFit: "cover"}} src={image2} alt="image2" />
      </div>
     </div>
  );
}
