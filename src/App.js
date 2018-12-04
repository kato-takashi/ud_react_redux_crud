import React  from 'react';
const profiles = [
	{name:"Taro", age:10},
	{name:"Hanako", age:5},
	{name:"Takashi"}
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
export default App; 

User.defaultProps = {age:7}
