import React  from 'react';
import PropTypes from 'prop-types'
const profiles = [
	{name:"Taro", age:10},
	{name:"Hanako", age:5},
	{name:"Takashi", age:3}
]
const App = ()=>{
	return(<div>{
			profiles.map((profile, index)=>{
				return <User name={profile.name} age={profile.age} key={index}/>
			})
		}
	</div>) 
}

const User = (props)=>{
	return <div>Hi!, Iam {props.name}!, and {props.age} years old!</div>
}
User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}
export default App;
