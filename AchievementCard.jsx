import React from 'react'
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';
import "./AchievementCard.css";
function AchievementCard() {
    return (
      <>
      <div style={{ justifyContent: "center", display: "flex", marginTop: "4rem" }}>
        <Stack direction='horizontal' gap={3}>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title><h1 style={{ fontWeight: "bold", color: "black" }}>1st</h1></Card.Title>
              <Card.Text style={{ fontWeight: "bold", color: "black" }}><h1>* * * *</h1></Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Business Presentation in Formula Bharat</Card.Subtitle>
              <Card.Text>
                <h4 style={{ fontWeight: "bold" }}>2022</h4>
              </Card.Text>
              <Card.Text style={{ fontWeight: "bold", color: "blue" }}>
                #Racing Up The Ladder
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title><h1 style={{ fontWeight: "bold", color: "black" }}>4th</h1></Card.Title>
              <Card.Text style={{ fontWeight: "bold", color: "black" }}><h1>* * * *</h1></Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Business Presentation in FSUK</Card.Subtitle>
              <Card.Text>
                <h4 style={{ fontWeight: "bold" }}>2022</h4>
              </Card.Text>
              <Card.Text style={{ fontWeight: "bold", color: "blue" }}>
                #Racing Up The Ladder
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title><h1 style={{ fontWeight: "bold", color: "black" }}>1st</h1></Card.Title>
              <Card.Text style={{ fontWeight: "bold", color: "black" }}><h1>* * * *</h1></Card.Text>
              <Card.Subtitle className="mb-2 text-muted">System Intelligence in Formula Bharat</Card.Subtitle>
              <Card.Text>
                <h4 style={{ fontWeight: "bold" }}>2022</h4>
              </Card.Text>
              <Card.Text style={{ fontWeight: "bold", color: "blue" }}>
                #Racing Up The Ladder
              </Card.Text>
            </Card.Body>
          </Card>
        </Stack>
      </div>
    </>
    )
}

export default AchievementCard

