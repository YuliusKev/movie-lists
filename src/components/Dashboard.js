import {Card, Container, Row, Col} from "react-bootstrap"
import "../style/dashboard.css"


const Dashboard = (allMovies) => {
   const movies  = allMovies['allData']['Search'];
    
   if(movies == null) 
   {
        return (<h1>Loading data</h1>)
   }
   else
   {
        return(
            <Container className="bg-dark">
            {
                movies.map((value, index) => {
                    return (
                        <Row key={index}>
                            <Col key={index}>
                                <Card  key={index} className="movieImage">
                                    <Card.Img variant="top" src={value.Poster} alt="poster" className="movieImage"/>
                                    <Card.Body>
                                        <Card.Text className="movieTitle">
                                            {value.Title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col >
                        </Row>
                    );
                })
            }
            </Container>
        )
       
   }

}

export default Dashboard