//Functional Component
const MyApp = () => {
    //State Declaration with Hook
    const [title, setTitle] = React.useState("Learn React");

    //Variable Declaration
    let foo ="Hei";
    console.log('A:', foo);

    //Arrow Function inside Functional Component
    const handleButtonClick = () => {
        console.log('B', foo);
        foo = "Hello";
        console.log('C', foo);

        if (title === "Learn React") {
            //change the state value
            setTitle("Learn JavaScript");
        }
        else {
            setTitle("Learn React");
        }
    }
    
    //Arrow Funciton inside Functional Component
    const handleFooClick = () => {
        console.log(foo);
        alert(foo);
    }

    return (
        <div>
            <h3>Title : {title}</h3>
            <div>
                <p><button onClick={handleButtonClick}>Change Title</button></p>
                <p><button onClick={handleFooClick}>Get Foo value </button></p>
            </div>

        </div>
    )
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);