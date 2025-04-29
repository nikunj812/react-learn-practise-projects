import { useState, useCallback, useRef } from "react"

function DiceGame() {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const dice1Ref = useRef(null);
    const dice2Ref = useRef(null);

    const player1 = useCallback(() => {
        const points = {
            1: [5],
            2: [3,7],
            3: [3,5,7],
            4: [1,3,7,9],
            5: [1,3,5,7,9],
            6: [1,3,4,6,7,9]
        }
        return points[dice1].map((pos) => {
            return <div className={`point pos-${pos}`}></div>;
        })
    }, [dice1]);

    const rollDice1 = useCallback(() => {
        const random = Math.floor(Math.random() * 6) + 1;
        setDice1(random);
    }, [setDice1, player1])

    const copyNumber1 = useCallback(() => {
        window.navigator.clipboard.writeText(dice1);
        dice1Ref.current.style.backgroundColor = 'red';
        setTimeout(() => {
            dice1Ref.current.style.backgroundColor = 'var(--color-red-400)';
        }, 1000)
        // dice1Ref.current?.select();
    }, [dice1])

    const copyNumber2 = useCallback(() => {
        window.navigator.clipboard.writeText(dice2);
        // dice2Ref.current?.select();
        dice2Ref.current.style.backgroundColor = 'red';
        setTimeout(() => {
            dice2Ref.current.style.backgroundColor = 'var(--color-red-400)';
        }, 1000)
    }, [dice2])

    const player2 = useCallback(() => {
        const points = {
            1: [5],
            2: [3,7],
            3: [3,5,7],
            4: [1,3,7,9],
            5: [1,3,5,7,9],
            6: [1,3,4,6,7,9]
        }
        return points[dice2].map((pos) => {
            return <div className={`point pos-${pos}`}></div>;
        })
    }, [dice2]);

    const rollDice2 = useCallback(() => {
        const random = Math.floor(Math.random() * 6) + 1;
        setDice2(random);
    }, [setDice2, player2])

    return (
        <>
        <div className="flex w-full h-screen">
            <div className="flex  flex-col justify-center items-center h-full w-[50%] bg-amber-400">
                <div className="text-white bg-amber-600 p-2 mb-4 rounded">Player 1</div>
                <div className="h-[50px] w-[50px] bg-red-400 rounded-lg mb-4 p-2 grid grid-cols-3 grid-rows-3 relative gap-1"  ref={dice1Ref}>
                    {player1()}
                </div>
                <button className="bg-white rounded mb-18" onClick={copyNumber1}>
                    <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="8" y="8" width="12" height="12" rx="2" />  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></svg>
                </button>

                <button onClick={rollDice1} className="bg-cyan-900 text-white p-4 rounded-4xl">Rotate</button>
            </div>
            <div className="flex  flex-col justify-center items-center h-full w-[50%] bg-amber-800">
                <div className="text-white bg-amber-600 p-2 mb-4 rounded">Player 2</div>
                <div className="h-[50px] w-[50px] bg-red-400 rounded-lg mb-4 p-2 grid grid-cols-3 grid-rows-3 relative gap-1"   ref={dice2Ref}>
                    {player2()}
                </div>
                <button className="bg-white rounded mb-18" onClick={copyNumber2}>
                    <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="8" y="8" width="12" height="12" rx="2" />  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></svg>
                </button>

                <button onClick={rollDice2} className="bg-cyan-900 text-white p-4 rounded-4xl">Rotate</button>
            </div>
        </div>
        <style>{`
            .point {
                width: 8px;
                height: 8px;
                background-color: black;
                border-radius: 50%;
                justify-self: center;
                align-self: center;
            }
            .pos-1 {
                grid-column: 1;
                grid-row: 1;
            }
            .pos-2 {
                grid-column: 2;
                grid-row: 1;
            }
            .pos-3 {
                grid-column: 3;
                grid-row: 1;
            }
            .pos-4 {
                grid-column: 1;
                grid-row: 2;
            }
            .pos-5 {
                grid-column: 2;
                grid-row: 2;
            }
            .pos-6 {
                grid-column: 3;
                grid-row: 2;
            }
            .pos-7 {
                grid-column: 1;
                grid-row: 3;
            }
            .pos-8 {
                grid-column: 2;
                grid-row: 3;
            }
            .pos-9 {
                grid-column: 3;
                grid-row: 3;
            }
        `}</style>
        </>
    )
}

export default DiceGame