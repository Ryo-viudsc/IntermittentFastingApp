import axios from 'axios';


export default class Spoonacular extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=73cf9aebc64843fc83ff773bfdbddc88`)
      .then(res => {
    
        console.log(res);
        const persons = res.data;
        console.log(persons)

        this.setState({ persons });
      }).carch(function err(){
          console.log("error");
      }).finally(function final(){
          console.log("final printing....")
      })
  }

  render() {
    return (
      
          <Text>
           test secssssssss
          </Text>
        
    )
  }
}




//https://api.spoonacular.com/recipes/random?apiKey=73cf9aebc64843fc83ff773bfdbddc88.

//the endpoints is under the baseURL 
//All Yelp Fusion API endpoints are under 
//https://api.yelp.com/v3.