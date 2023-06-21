
const Hello2 = (props) => {
    console.log('French greetings from Hello2 component')
    return (
      <div>
        <p>French: {props.frenchGreeting}</p>
      </div>
    )
  }

  export default Hello2;