import {Card, Container, Row, Col} from "react-bootstrap"
import poster from "../img/posters/poster_1.png"

const Dashboard = (allData) => {
    const testing = Object.keys(allData).map(function(key) {
        return allData[key];
    });

    console.log(testing[0][0])
    return testing[0].map((movie, index) => {
        return (
            <Container>
                <Row>
                    <Col key={index}>
                        <Card>
                            <Card.Img variant="top" src={movie.Poster} className="movieImage"/>
                            <Card.Body>
                            <Card.Text>
                                {movie.Title} ({movie.Year})
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    })
}

export default Dashboard