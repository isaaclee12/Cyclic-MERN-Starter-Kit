import { useExampleContext } from '../contexts/ExampleContext';

export default function Layout() {

    // Consume (i.e. acquire, grab, pull, etc) the data
    // from the exampleData var in the ExampleContext.
    const { exampleData } = useExampleContext();

    return (
        <div className="mb-10">
            <h1 className="text-xl">Hey Everyone!</h1>
            <p>Check out this cool context variable: {exampleData.value}</p>
        </div>
    )
}