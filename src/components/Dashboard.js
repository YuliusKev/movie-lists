import {Card, Container, Row, Col} from "react-bootstrap"
import poster from "../img/posters/poster_1.png"
import { useState, useEffect } from "react";

const Dashboard = (allMovies) => {
   const movies  = allMovies['allData']['Search'];
    
   movies.map((value, index) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={value.poster} className="movieImage"/>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
   })
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={poster} className="movieImage"/>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={poster} className="movieImage"/>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col>
                    <Card>
                        <Card.Img variant="top" src={poster} className="movieImage"/>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard