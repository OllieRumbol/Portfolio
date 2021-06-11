import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../style/Home.css';
import '../../style/Shared.css';

export default function HomePage() {

  return (
    <div className='p-4'>
      <Jumbotron fluid>
        <Container className='header'>
          <h1 className='title'>Oliver BOURNE</h1>
          <h1 className='subTitle'>Software Developer</h1>
          <hr className='green' />
          <h5 className='p-2'>
            .NET Developer with a passion for creating well structured and reliable solutions using the Microsoft stack of technologies.
            I can't wait to learn new tools, frameworks and libraries. I have a keen interest in frontend technologies like React and Vue.
            Achieved a 1st class BSc focused in Computer Science from the University of Kent.
          </h5>
        </Container>
      </Jumbotron>
      <div>
        <h4 className='colour display-4 text-success'>Current Favourite Technology</h4>
      </div>
      <div>
        <h6 className='colour display-6'>.NET 5</h6>
      </div>
      <div className='colour fs-5'>
        <p>
          Its been really interesting to see how Microsoft's .NET library has evolved over the years. Grown from Framework (Web Forms and
          MVC), .NET Core and now .NET 5. I can create well designed web resources with ease using the powerful C# language and OOP design 
          pattern. Deployments are as easy as clicking your fingers with Visual Studio and Azure.
        </p>
      </div>
      <div>
        <h6 className='colour display-6'>React</h6>
      </div>
      <div className='colour fs-5'>
        <p>
          There are a variety of frontend frameworks out there. Angular, Vue, Ember, Backbone just to name a few. So why do I like React the 
          most? I have used a few of the frameworks mention earlier and using any framework is better than just writing HTMl, CSS and JS on 
          its own. These tools create a far more well structured and adaptable technical solution. React has a whole host of useful tools.
          JSX, virtual DOM, one-way binding, state management and component design. However I like React because of its simplicity. Each
          component is just a simple JS file that returns HTML, no need to transpile it. React hooks make state even easier to manage and 
          huge array of third party libraries for testing, routing and creative design. 
        </p>
      </div>
      <hr className='green' />
      <div>
        <h4 className='colour display-4 text-success'>Testimonials</h4>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          <Card className='cardColour colour'>
            <Card.Header className='text-center'>
              <Accordion.Toggle className='fs-5' as={Button} variant="success" eventKey="0">
                From Benjamin Loveridge-Rowe, Software Engineer at PageSuite
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p className='fs-5'>
                  Oli is a hardworking, dedicated and highly talented developer who always brings innovative solutions to the team.
                </p>
                <p className='fs-5'>
                  Thanks to his passion for writing clean, maintainable code, working on his projects is always an absolute pleasure.
                  He is a quick learner, and is never afraid to pick up something new, which enables him to diversify his skill set
                  quickly and easily.
                </p>
                <p className='fs-5'>
                  Always looking for the best way to push a project forward, Oli embraces modern technologies and frameworks to ensure
                  the end product is as polished and efficient as it can be, always using the right tool for the job.
                </p>
                <p className='fs-5'>
                  Oli is very adept at foreseeing potential hurdles in a project, which allows him to plan with confidence knowing what
                  issues we may face along the way, and how best to overcome them.
                </p>
                <p className='fs-5'>
                  I’ve had the pleasure of working with him every day for some time now, and hope I can continue to do so for a long
                  time to come.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className='cardColour colour'>
            <Card.Header className='text-center'>
              <Accordion.Toggle className='fs-5' as={Button} variant="success" eventKey="1">
                From Augustine Lau, Flutter Developer at PageSuite
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p className='fs-5'>
                  It’s been an absolute pleasure working with Oliver. He is a very competent and highly skilled backend developer
                  who has excellent problem solving and communication skills. He has taken an overwhelming amount of additional
                  responsibilities outside of what you would expect from a junior developer, he really goes above and beyond.
                </p>
                <p className='fs-5'>
                  I have worked with Oliver on many projects. He has an excellent ability to adapt to different situations, coming up
                  with very effective and logical solutions to short sighted problems that has occurred numerous times in past projects.
                  Oliver would be an extremely valuable asset of any team he joins.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}