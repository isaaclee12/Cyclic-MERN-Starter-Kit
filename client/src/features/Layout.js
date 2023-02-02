import { useExampleContext } from '../contexts/ExampleContext';

export default function Layout() {

    // Consume (i.e. acquire, grab, pull, etc) the data
    // from the exampleData var in the ExampleContext.
    const { exampleData } = useExampleContext();

    return (
        <div className="my-10">
            <h1 className="text-xl">Hey Everyone!</h1>
            <p>Check out this cool context variable:</p>
            <h3 className="text-3xl">{exampleData.value}</h3>
        </div>
    )
}