// Functional Component
const Cat = (props) => {
    const [isHungry, setIsHungry] = React.useState(true);

    // Return Value with JSX
    return (
        <div>
            <p>I am {props.name}, and I am {isHungry ? " hungry" : " full"}!</p>
            <button
                onClick={()=>{
                    setIsHungry(false);
                }}
                disabled={!isHungry}
            >
                {isHungry ? "Pour me some milk, please!" : "Thank You!"}
            </button>

        </div>
    );    
}


// Functional Component
const Cafe = () => {
    return (
        <div>
            <Cat name="Mylo" />
            <Cat name="Hanni" />
        </div>
    );
}

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);