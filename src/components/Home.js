import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'
import laura from '../static/pexels-laura-556829.jpg'
import cooking from '../static/undraw_cooking_p7m1.svg'
import muskan from '../static/muskan.JPG'
import vinit from '../static/vinit.jpg'





export default function Home() {
  return (
    <div>
      <section id='section1'>
        <h1>Grabb !t</h1>
        <h2 style={{fontSize: '2em'}}>
          <Typewriter
            words={['Grab Your Food', 'From  Grabb !t']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>
        
      </section>
      <section id='section2'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={laura} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={laura} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={laura} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={laura} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={laura} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={laura} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </section>
      <section id='section3'>
        <img src={cooking} alt="" />
        <h1>Best Food Quality and Hygiene</h1>
      </section>
      <h1 style={{textAlign: 'center',marginTop: '5vh',fontSize: '3em',fontWeight: '200'}}>FOUNDERS AND DEVELOPERS</h1>
      <section id='section4'>
        <div>
          <img src={muskan} alt="muskan"/>
        </div>
        <div>
          <h1 style={{fontWeight: '300', fontSize: '4rem', textAlign: 'center',top: '15%',position: 'relative'}}>MUSKAN GOYAL</h1>
          <h3 style={{fontWeight: '300',textAlign:'center', position: 'relative',top: '35%', width: '90%'}}>Bio : <span>
          <Typewriter
            words={['SSCBS\'25 | IFSA Network India | Nucleus | Kronos | Enthaustic Coder at Shaheed Sukhdev College | Passionate Learner pursuing B.Sc CS | 98.9 Percentile in Cuet | Web Developer | Java | Python | C++ Coder']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={1000}
          /></span></h3>
        </div>
      </section>
      <section id='section5'>
        <div>
          <img src={vinit} alt="vinit"/>
        </div>
        <div>
          <h1 style={{fontWeight: '300', fontSize: '4rem', textAlign: 'center',top: '15%',position: 'relative'}}>VINIT VIJAL</h1>
          <h3 style={{fontWeight: '300',textAlign:'center', position: 'relative',top: '35%', width: '90%'}}>Bio : <span>
          <Typewriter
            words={['SSCBS’25/26 (BSc CS) | Tech Enthusiast | Photography | YouTuber | Python | ReactJS ❤️ | Express Node - Web Development | C++ | WebRTC | Competitive Coding | 99.2%ile in CUET | Kronos | ACM']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={1000}
          /></span></h3>
        </div>
      </section>
    </div>
  )
}
