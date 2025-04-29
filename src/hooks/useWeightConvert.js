import { useState, useEffect } from 'react'

const useWeightConvert = () => {
    const [weightUnitData, setWeightUnitData] = useState({});

    const defaultWeightUnits = {
        pound: {
            label: 'Pound',
            convert: {
                ounce: 16,       // 1 pound = 16 ounces
                kg: 0.453592,    // 1 pound = 0.453592 kg
                gram: 453.592,   // 1 pound = 453.592 grams
            }
        },
        ounce: {
            label: 'Ounce',
            convert: {
                pound: 0.0625,   // 1 ounce = 0.0625 pounds
                kg: 0.0283495,   // 1 ounce = 0.0283495 kg
                gram: 28.3495,   // 1 ounce = 28.3495 grams
            }
        },
        kg: {
            label: 'Kilogram',
            convert: {
                pound: 2.20462,
                ounce: 35.274,
                gram: 1000,
            }
        },
        gram: {
            label: 'Gram',
            convert: {
                pound: 0.00220462,
                ounce: 0.035274,
                kg: 0.001,
            }
        }
    };

    // useEffect(() => {
    //     if (selectWeight && defaultWeightUnits[selectWeight]) {
    //         setWeightUnitData(defaultWeightUnits[selectWeight]);
    //     } else {
    //         setWeightUnitData({});
    //     }
    // }, [selectWeight]);

    return defaultWeightUnits
    
}

export default useWeightConvert