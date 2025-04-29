import { useState } from "react"
import {InputBox} from './'
import useWeightConvert from "../hooks/useWeightConvert"

const WeightConverter = () => {
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(0)
    const [fromWeight, setFromWeight] = useState('pound')
    const [toWeight, setToWeight] = useState('pound')
    
    const weightUnits = [
        { value: 'pound', label: 'Pound' },
        { value: 'ounce', label: 'Ounce' },
        { value: 'kg', label: 'Kilogram' },
        { value: 'gram', label: 'Gram' },
    ];
    const weightUnitInfo = useWeightConvert()

    const getConversionRate = (from, to) => {
        if (weightUnitInfo[from] && weightUnitInfo[from].convert[to]) {
            return weightUnitInfo[from].convert[to];
        }
        return 1; // if same unit or not found
    };

    const handleConversationChange = (value, type, actionTarget) => {
        let newFromPrice = fromPrice;
        let newToPrice = toPrice;
        let newFromWeight = fromWeight;
        let newToWeight = toWeight;
    
        if (type === 'from') {
            if (actionTarget === 'price') {
                newFromPrice = value;
                setFromPrice(value);
            } else {
                newFromWeight = value;
                setFromWeight(value);
            }
        } else {
            if (actionTarget === 'price') {
                newToPrice = value;
                setToPrice(value);
            } else {
                newToWeight = value;
                setToWeight(value);
            }
        }
    
        const rate = getConversionRate(newFromWeight, newToWeight);
        const reverseRate = getConversionRate(newToWeight, newFromWeight);
    
        if (type === 'from') {
            setToPrice((newFromPrice * rate).toFixed(4));
        } else {
            setFromPrice((newToPrice * reverseRate).toFixed(4));
        }
    };
    
    const swap = () => {
        setFromPrice(toPrice);
        setToPrice(fromPrice);  
        setFromWeight(toWeight);
        setToWeight(fromWeight); 
    }

    return (
        <div className="relative flex flex-col justify-center items-center w-full h-screen bg-amber-950 gap-1">
            {/* From */}
            <InputBox 
                weightUnits={weightUnits}
                price={fromPrice}
                selectWeightUnit={fromWeight}
                onPriceChange={(value) => handleConversationChange(value, 'from', 'price')}
                onWeightUnitChange={(value) => handleConversationChange(value, 'from', 'weightUnit')}
            />
            <button className="absolute w-[200px] h-[75px] bg-amber-600 text-white"  onClick={swap}>SWAP</button>
            {/* TO */}
            <InputBox
                weightUnits={weightUnits}  
                price={toPrice}
                selectWeightUnit={toWeight} 
                onPriceChange={(value) => handleConversationChange(value, 'to', 'price')}  
                onWeightUnitChange={(value) => handleConversationChange(value, 'to', 'weightUnit')}       
            />
        </div>
    )
}

export default WeightConverter