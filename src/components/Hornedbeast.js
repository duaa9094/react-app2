import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class Hornedbeast extends React.Component{

constructor(props){
    super(props);
    this.state= {
        number : 0
    }
}

incrementNum = () => {
    this.setState({
        number : this.state.number+1
    })
}






    render(){
        return(

            <div style={{ width: 'auto', margin: '30px'}}  >
  {/* <img onClick={this.incrementNum}  src={this.props.imageurl}/>
            <h2>{this.props.title}</h2>
            <p>number = {this.state.number}</p>
            <p>{this.props.description}</p> */}
          
            
          <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imageurl}  onClick={this.incrementNum} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    💓{this.state.number}
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
  </Card.Body>
</Card>


                      </div>
            
        )
    }
}

export default Hornedbeast;