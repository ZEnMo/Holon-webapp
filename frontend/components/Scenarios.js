import React, { useState, useEffect } from "react";
import Button from "../components/Buttons/Button";
import ScenarioSlider from "./Scenarios/Scenarioslider";
import Scenarioresults from "./Scenarios/Scenariosresults";
import Scenarioswitch from "./Scenarios/Scenarioswitch";
import HolonButton from "../components/Buttons/HolonButton";
import Loader from "./Scenarios/Loader";
import Neighbourhood from "./Scenarios/Neighbourhood";
import Tooltip from "./Scenarios/Tooltip";

function Scenarios(props) {

    const [loading, setLoading] = useState(false);

    const [uncalculatedScenario, setUncalculatedScenario] = useState(false);

    const [neighbourhood1, setNeighbourhood1] = useState();
    const [neighbourhood2, setNeighbourhood2] = useState();

    const [heatholon, setHeatholon] = useState(false);
    const [windholon, setWindholon] = useState(false);

    const [local, setLocal] = useState(true);

    const [reliability, setReliability] = useState(0);
    const [energyconsumption, setEnergyconsumption] = useState(0);
    const [affordability, setAffordability] = useState(0);
    const [selfsufficient, setSelfsufficient] = useState(0);

    useEffect(() => {
        setUncalculatedScenario(true)
    }, [neighbourhood1, neighbourhood2, heatholon, windholon]);

    useEffect(() => {
        props.neighbourhood1 && setNeighbourhood1(props.neighbourhood1)
        props.neighbourhood2 && setNeighbourhood2(props.neighbourhood2)

        props.heatholon && setHeatholon(props.heatholon)
        props.windholon && setWindholon(props.windholon)

        // start calculating when all ingredients are there to calculate
        props.neighbourhood1 && props.neighbourhood2 &&
            triggercalculate()
    }, []);

    async function triggercalculate(e) {
        if (e) {
            e.preventDefault()
            e.stopPropagation()
        }

        setLoading(true)

        const timer = setTimeout(() => {
            setLoading(false);
            setUncalculatedScenario(false);

            setReliability({ national: Math.floor(Math.random() * 100), local: Math.floor(Math.random() * 100) });
            setEnergyconsumption({ national: Math.floor(Math.random() * 10000), local: Math.floor(Math.random() * 10000) });
            setAffordability({ national: Math.floor(Math.random() * 10000), local: Math.floor(Math.random() * 10000) });
            setSelfsufficient({ national: Math.floor(Math.random() * 100), local: Math.floor(Math.random() * 100) });
        }, 5000);



        return () => clearTimeout(timer);
    }

    function updateLocal(arg1, arg2) {
        setLocal(arg2)
    }

    return (
        <React.Fragment>
            {props.locked &&
                <div className="absolute w-full h-full">
                    <div className={` mx-10 absolute h-[50vh] flex px-24  ${props.right ? 'right-[0]' : ''} `}>
                        <div className={`border-solid  ${props.borderColor} ${props.right ? 'border-r-8' : 'border-l-8'} `}></div>

                    </div>
                </div>
            }
            <div className="px-24 mx-auto z-10">
                <div className={props.locked ? `${props.borderColor} border-8 border-solid p-2 bg-white` : 'p-2 border-transparent border-8'}>
                    <h2 className="text-2xl">Twee keer slimmer</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-full md:basis-1/3 pr-4">
                            <form className="" >
                                <h3 className="text-xl mb-4" >Instellingen</h3>
                                <fieldset disabled={props.locked || loading} className={props.locked && `cursor-not-allowed`}>
                                    <div className={props.locked && `pointer-events-none`}>
                                        {neighbourhood1 &&
                                            <Neighbourhood
                                                label="1"
                                                locked={props.locked}
                                                neighbourhood={neighbourhood1}
                                                setNeighbourhood={setNeighbourhood1}
                                            />
                                        }
                                        {neighbourhood2 &&
                                            <Neighbourhood
                                                label="2"
                                                locked={props.locked}
                                                neighbourhood={neighbourhood2}
                                                setNeighbourhood={setNeighbourhood2}
                                            />
                                        }
                                        <h5 className="text-lg">Juridisch</h5>

                                        <div className="flex flex-col">

                                            <label htmlFor="heatholon" className="flex flex-row items-center gap-2 mb-2">
                                                <input type="checkbox" name="heatholon" id="heatholon" onChange={(e) => setHeatholon(e.target.checked)} checked={heatholon} />
                                                <span className="mr-auto">Warmteholon</span>
                                                <Tooltip tooltipMessage="Some description">
                                                    <span className="border rounded-full block text-center leading-[1rem] h-[1rem] w-[1rem] bg-green-300">i</span>
                                                </Tooltip>
                                            </label>
                                            <label htmlFor="windholon" className="flex flex-row items-center gap-2 mb-2">
                                                <input type="checkbox" name="windholon" id="windholon" onChange={(e) => setWindholon(e.target.checked)} checked={windholon} />
                                                <span className="mr-auto">Windholon</span>
                                                <Tooltip tooltipMessage="Some description">
                                                    <span className="border rounded-full block text-center leading-[1rem] h-[1rem] w-[1rem] bg-green-300">i</span>
                                                </Tooltip>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                            </form>

                        </div>
                        <div className="w-[4px] bg-slate-300"></div>
                        <div className="basis-full md:basis-2/3 pl-4">
                            <Scenarioresults
                                reliability={reliability}
                                energyconsumption={energyconsumption}
                                affordability={affordability}
                                selfsufficient={selfsufficient}
                                local={local}
                                setLocal={updateLocal}
                            >
                                {props.locked && loading &&
                                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                                        <Loader />
                                    </div>
                                }
                                {!props.locked &&
                                    <React.Fragment>
                                        {(uncalculatedScenario == true || loading) &&
                                            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                                                {loading ? <Loader /> : (
                                                    <HolonButton variant="darkblue" onClick={(e) => triggercalculate(e)}>Herbereken</HolonButton>
                                                )}
                                            </div>
                                        }
                                    </React.Fragment>
                                }
                            </Scenarioresults>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Scenarios;