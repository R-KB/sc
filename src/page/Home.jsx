import { Button, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Container>
        <h2>一覧</h2>
        <hr />
        <div className="two-by"><Link to="/edit"><Button variant="info" className="home__btn">編集画面</Button></Link>
        <Link to="/check"><Button variant="success" className="home__btn">check</Button></Link></div>
        <hr />
        
      </Container>
    </>
  );
}
