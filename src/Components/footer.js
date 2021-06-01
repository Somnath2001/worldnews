import React from "react";
import {
    Card,
    Button,
    CardBody,
    CardText,
    CardHeader,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";


const Footer = () => {
    return(
    <div>
       <Card className="text-center footer">
  <CardHeader>Lastest NEWS.. </CardHeader>
  <CardBody>
    <CardTitle>Created by Somnath!!!!</CardTitle>
    <CardText>
      Fetches the information from the NEWS API
    </CardText>
    <Button variant="primary">Contact Me</Button>
  </CardBody>
  <CardFooter className="text-muted">
    <Row>
      <Col>
      <span>ABOUTUS</span><br/>
      <span>HELP</span><br/>
      <span>LEGAL</span>
      </Col>
    </Row>
  </CardFooter>
</Card> 
    </div>
      );
}
export default Footer;