import React from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./ImgCards.css";
function ImgCards() {
    return (
       <>

      <div style={{ justifyContent: "center", display: "flex", marginTop: "1rem", flexDirection: "column", alignItems: "center" }}>
        <Stack direction='horizontal' gap={3} style={{marginBottom:"3rem"}}>
          <Card style={{ height: "16rem", width: '100%', borderRadius: "1rem" }}>
            <Card.Img variant="top" src="https://www.iitbracing.org/assets/prithvi2-CFrGDkT2.png" style={{ height: "100rem",borderRadius:"1rem" }} />
            <Card.Body>
              <Card.Title><h2 style={{ fontWeight: "bold"}}>Mechanical</h2></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to="/Gallery"><Button variant="primary">Gallery</Button></Link>
            </Card.Body>
          </Card>
          <Card style={{ height: "17rem", width: '100%', borderRadius: "1rem", marginBottom: "1rem" }}>
            <Card.Img variant="top" src="https://www.iitbracing.org/assets/a11-DPe64DH-.jpeg" style={{height:"100rem",borderRadius:"1rem"}} />
            <Card.Body>
              <Card.Title><h2 style={{ fontWeight: "bold" }}>Driverless</h2></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to="/Gallery"><Button variant="primary">Gallery</Button></Link>
            </Card.Body>
          </Card>
          </Stack>
          <Stack direction='horizontal'gap={3}>
          <Card style={{ height: "18rem", width: '100%', borderRadius: "1rem", marginBottom: "1rem" }}>
            <Card.Img variant="top" src="https://www.iitbracing.org/assets/a1-A-pHDCYh.jpeg" style={{borderRadius:"1rem"}} />
            <Card.Body>
              <Card.Title><h2 style={{ fontWeight: "bold" }}>Electrical</h2></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to="/Gallery"><Button variant="primary">Gallery</Button></Link>
            </Card.Body>
          </Card>
          <Card style={{ height: "18rem", width: '100%', borderRadius: "1rem" }}>
            <Card.Img variant="top" src="https://www.iitbracing.org/assets/a8-CX9e0vo0.jpeg" style={{ height: "40rem",borderRadius:"1rem" }} />
            <Card.Body>
              <Card.Title><h2 style={{ fontWeight: "bold" }}>Organizational</h2></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to="/Gallery"><Button variant="primary">Gallery</Button></Link>
            </Card.Body>
          </Card>
        </Stack>
      </div>
    </>
    )
}

export default ImgCards



