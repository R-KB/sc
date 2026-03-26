import { useMemo } from "react";
import { Accordion, Alert, Card, Spinner } from "react-bootstrap";
import useGetQuestionByGenre from "../hook/useGetQuestionByGenre";
import useGetMemoByQuestion from "../hook/useGetMemoByQuestion";

function QuestionCard({ question }) {
  const { memo, isLoading, isError } = useGetMemoByQuestion(question.id);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>問題 {question.id}</Card.Title>
        <Card.Img variant="top" className="q-img" src="https://placehold.jp/23578b/ffffff/200x150.png?text=No%20Image." />
        <Card.Text>{question.description}</Card.Text>

        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="answer">
            <Accordion.Header>答え</Accordion.Header>
            <Accordion.Body>{question.answer}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="memo">
            <Accordion.Header>メモ</Accordion.Header>
            <Accordion.Body>
              {isLoading && <Spinner animation="border" size="sm" />}
              {isError && <div>メモ取得エラー</div>}
              {!isLoading && !isError && (!memo || memo.length === 0) && <div>メモなし</div>}
              {!isLoading && !isError && memo && memo.length > 0 && (
                <ul>
                  {memo.map((item) => (
                    <li key={item.id}>{item.content ?? item.memo ?? JSON.stringify(item)}</li>
                  ))}
                </ul>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default function QuestionList({ genreId }) {
  const { question, isLoading, isError } = useGetQuestionByGenre(genreId);

  const random5 = useMemo(() => {
    if (!question || question.length === 0) {
      return [];
    }

    const shuffled = [...question];
    /* eslint-disable react-hooks/purity */
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    /* eslint-enable react-hooks/purity */

    return shuffled.slice(0, 5);
  }, [question]);

  if (!genreId) {
    return <Alert variant="info">ジャンルを選択してください</Alert>;
  }

  if (isError) {
    return <Alert variant="danger">データ取得エラー</Alert>;
  }

  if (isLoading) {
    return (
      <Alert className="d-flex justify-content-center">
        <Spinner animation="border" />
      </Alert>
    );
  }

  if (!question || question.length === 0) {
    return <Alert variant="info">データがありません</Alert>;
  }

  return (
    <div>
      <hr />
      {random5.map((item) => (
        <QuestionCard key={item.id} question={item} />
      ))}
    </div>
  );
}
