import { Card, Row, Col, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GenreList = () => {
  const [genre, setGenre] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 6;

  useEffect(() => {
    axios.get("/api/genre").then(res => setGenre(res.data));
  }, []);

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  // ページネーション処理
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = genre.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(genre.length / itemsPerPage);

  return (
    <>
      <Row>
        {currentItems.map(item => (
          <Col md={6} key={item.id} className="mb-3">
            <Card onClick={() => handleClick(item.id)} style={{ cursor: "pointer" }}>
              <Card.Body>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination>
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default GenreList;
