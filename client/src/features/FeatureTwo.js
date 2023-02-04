import { useExampleContext } from '../contexts/ExampleContext';

export default function FeatureTwo() {

    // Consume (i.e. acquire, grab, pull, etc) the data
    // from the ExampleContext.
    const { setExampleData } = useExampleContext();

    // We can then update this data between files.

    // Try setting exampleData here:
    const handleButton = () => {
        setExampleData({value: "Value is now Two"});
    }

    const buttonStyle = "border-2 border-black \
    bg-purple-600 hover:bg-purple-700 active:bg-purple-800 \
    rounded py-2 px-10 text-slate-800 \
    text-lg font-bold tracking-wider"

    return (
        <div>
            <button className={buttonStyle} onClick={handleButton}>Feature Two - Press Me!</button>
        </div>
    )
} 