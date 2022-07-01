import React, { useState, useEffect } from "react";
import Button from "./Button";
import ScenarioSlider from "./Scenarios/Scenarioslider";
import Scenarioresults from "./Scenarios/Scenariosresults";
import Scenarioswitch from "./Scenarios/Scenarioswitch";

function Scenarios({ locked }) {

    const [loading, setLoading] = useState(false);

    const [uncalculatedScenario, setUncalculatedScenario] = useState(false);


    const [heatpump, setHeatpumps] = useState(0);
    const [evadoptation, setEvadoptation] = useState(0);
    const [solarpanels, setSolarpanels] = useState(0);
    const [heatnetwork, setHeatnetwork] = useState(false);

    const [cooporation, setCooperation] = useState('');

    const [legal, setLegal] = useState('');

    const [local, setLocal] = useState('');

    const [reliability, setReliability] = useState(0);
    const [energyconsumption, setEnergyconsumption] = useState(0);
    const [affordability, setAffordability] = useState(0);
    const [selfsufficient, setSelfsufficient] = useState(0);

    useEffect(() => {
        setUncalculatedScenario(true)
    }, [heatpump, evadoptation, solarpanels, cooporation, heatnetwork, legal, local]);

    async function triggercalculate(e) {
        e.preventDefault()
        e.stopPropagation()

        setLoading(true)

        const timer = setTimeout(() => {
            console.log('timeout')
            setLoading(false),
                setUncalculatedScenario(false)

            setReliability(Math.floor(Math.random() * 100))
            setEnergyconsumption(Math.floor(Math.random() * 100))
            setAffordability(Math.floor(Math.random() * 100))
            setSelfsufficient(Math.floor(Math.random() * 100))
        }, 5000);



        return () => clearTimeout(timer);

        // const request = {}
        // await Calculate(request)
        //     .then((data) => {
        //         setLoading(true)
        //         setUncalculatedScenario(false)


        //     }).catch((err) => {
        //         setLoading(false)
        //         setUncalculatedScenario(false)
        //         console.log('error', err)
        //     });

    }

    return (
        <React.Fragment>
            <div className="container mx-auto">
                <div className={locked ? 'border-8 border-cyan-500 p-2' : 'p-2 border-transparent border-8'}>
                    <h2 className="text-2xl">Twee keer slimmer</h2>
                    <div className="flex flex-row">
                        <div className="basis-1/3">
                            <form className="px-2" >
                                <h3 className="text-xl" >Resultaten</h3>
                                <fieldset disabled={locked}>
                                    <ScenarioSlider inputid="heatpump" value={heatpump} updatevalue={setHeatpumps} />
                                    <ScenarioSlider inputid="evadoptation" value={evadoptation} updatevalue={setEvadoptation} />
                                    <ScenarioSlider inputid="solarpanels" value={solarpanels} updatevalue={setSolarpanels} />

                                    <Scenarioswitch off="nee" on="ja" label="Warmtenetwerk" inputid="heatnetwork" value={heatnetwork} updatevalue={setHeatnetwork} />
                                    <div className="flex flex-row">
                                        <select onChange={(e) => setCooperation(e.target.value)} value={cooporation}>
                                            <option value="">Maak keuze</option>
                                            <option value="optie 1">Optie 1</option>
                                            <option value="optie 2">Optie 2</option>
                                            <option value="optie 3">Optie 3</option>
                                        </select>
                                    </div>

                                    <h5>Juridisch</h5>
                                    <div className="flex flex-col">

                                        <label htmlFor="scenariolegal1">
                                            <input type="radio" name="scenariolegal" id="scenariolegal1" value="legal 1" onChange={(e) => setLegal(e.target.value)} checked={legal === 'legal 1'} />
                                            <span>Waarde 1</span>
                                        </label>
                                        <label htmlFor="scenariolegal2">
                                            <input type="radio" name="scenariolegal" id="scenariolegal2" value="legal 2" onChange={(e) => setLegal(e.target.value)} checked={legal === 'legal 2'} />
                                            <span>value 2</span>
                                        </label>
                                        <label htmlFor="scenariolegal3">
                                            <input type="radio" name="scenariolegal" id="scenariolegal3" value="legal 3" onChange={(e) => setLegal(e.target.value)} checked={legal === 'legal 3'} />
                                            <span>value 3</span>
                                        </label>
                                    </div>
                                </fieldset>

                            </form>

                        </div>
                        <div className="basis-2/3">
                            <Scenarioresults
                                reliability={reliability}
                                energyconsumption={energyconsumption}
                                affordability={affordability}
                                selfsufficient={selfsufficient}
                                local={local}
                                setLocal={setLocal}
                            >
                                <React.Fragment>
                                    {(uncalculatedScenario == true || loading) &&
                                        <div className="absolute inset-0 flex items-center justify-center bg-sky-500/50 z-10">
                                            {loading ? <p>Loading...</p> : (
                                                <Button onClick={(e) => triggercalculate(e)}>Recalculate</Button>
                                            )}
                                        </div>
                                    }
                                </React.Fragment>

                            </Scenarioresults>

                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Scenarios;