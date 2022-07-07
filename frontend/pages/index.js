import Head from "next/head";
import Scenarios from "../components/Scenarios";
import IntroductionVideo from "../components/IntroductionVideo";

import TextBlock from "../components/TextBlock";
import WelcomePage from "../components/WelcomePage";
import ContentBlock from "../components/ContentBlock";
import HolonButton from "../components/Buttons/HolonButton";

export default function Home() {
  const neighbourhood1 = {
    heatpump: { value: "0", label: "Warmtepompen" },
    evadoptation: { value: "70", label: "Elektrische auto's" },
    solarpanels: { value: "40", label: "Zonnepanelen" },
    heatnetwork: { value: false, label: "Warmtenet" },
  };
  const neighbourhood2 = {
    heatpump: { value: "0", label: "Warmtepompen" },
    evadoptation: { value: "70", label: "Elektrische auto's" },
    solarpanels: { value: "60", label: "Zonnepanelen" },
    heatnetwork: { value: true, label: "Warmtenet" },
  };
  return (
    <div>
      <Head>
        <title>HOLON en de kunst van het Loslaten</title>
        <meta name="description" content="HOLON en de kunst van het Loslaten" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen snap-y snap-mandatory overflow-y-auto">
        <ContentBlock>
          <WelcomePage></WelcomePage>
        </ContentBlock>
        <ContentBlock colorClass="bg-split-white-blue"></ContentBlock>
        <ContentBlock colorClass="bg-holon-blue-900" id="introVideo">
          <IntroductionVideo />
        </ContentBlock>
        <ContentBlock colorClass="bg-split-blue-white"></ContentBlock>
        <ContentBlock>
          <TextBlock value="hoeDoen" borderColor="border-holon-slated-blue-300"></TextBlock>
        </ContentBlock>
        <ContentBlock>
          <Scenarios
            scenarioid="1"
            locked
            scenarioTitle="Het moet anders"
            borderColor="border-holon-slated-blue-300"
            neighbourhood1={neighbourhood1}
            neighbourhood2={neighbourhood2}
            calculationresults={{
              local: {
                reliability: 100,
                affordability: 2420,
                energyconsumption: 7,
                selfsufficient: 58,
              },
              national: {
                reliability: 100,
                affordability: 2420,
                energyconsumption: 7,
                selfsufficient: 58,
              },
            }}
          />
        </ContentBlock>
        <ContentBlock>
          <TextBlock
            value="slimmerSamenwerken"
            borderColor="border-holon-gold-200"
            right="true"
          ></TextBlock>
        </ContentBlock>
        <ContentBlock>
          <Scenarios
            scenarioid="2"
            locked
            scenarioTitle="De windcoöperatie"
            right="true"
            borderColor="border-holon-gold-200"
            neighbourhood1={neighbourhood1}
            neighbourhood2={neighbourhood2}
            windholon={true}
            calculationresults={{
              local: {
                reliability: 0,
                affordability: 2062,
                energyconsumption: 16,
                selfsufficient: 49,
              },
              national: {
                reliability: 0,
                affordability: 2062,
                energyconsumption: 16,
                selfsufficient: 49,
              },
            }}
          />
        </ContentBlock>
        <ContentBlock>
          <TextBlock value="warmte" borderColor="border-holon-blue-900"></TextBlock>
        </ContentBlock>
        <ContentBlock>
          <Scenarios
            scenarioid="3"
            locked
            scenarioTitle="Ook warmte een rol"
            borderColor="border-holon-blue-900"
            neighbourhood1={neighbourhood1}
            neighbourhood2={neighbourhood2}
            heatholon={true}
            calculationresults={{
              local: {
                reliability: 100,
                affordability: 2218,
                energyconsumption: 14,
                selfsufficient: 85,
              },
              national: {
                reliability: 100,
                affordability: 2218,
                energyconsumption: 14,
                selfsufficient: 85,
              },
            }}
          />
        </ContentBlock>
        <ContentBlock>
          <TextBlock
            value="tweeKeerSlimmer"
            borderColor="border-holon-gold-600"
            right="true"
          ></TextBlock>
        </ContentBlock>
        <ContentBlock>
          <Scenarios
            scenarioid="4"
            locked
            scenarioTitle="Twee keer slimmer"
            borderColor="border-holon-gold-600"
            right="true"
            neighbourhood1={neighbourhood1}
            neighbourhood2={neighbourhood2}
            windholon={true}
            heatholon={true}
            calculationresults={{
              local: {
                reliability: 100,
                affordability: 1802,
                energyconsumption: 32,
                selfsufficient: 91,
              },
              national: {
                reliability: 100,
                affordability: 1802,
                energyconsumption: 32,
                selfsufficient: 91,
              },
            }}
          />
        </ContentBlock>
        <ContentBlock>
          <TextBlock
            value="afsluiter"
            underlineTitle="true"
            colorUnderline="decoration-holon-slated-blue-300"
          >
            <HolonButton variant="blue">Naar het open model</HolonButton>
            <HolonButton variant="blue">Op de hoogte blijven</HolonButton>
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <Scenarios
            scenarioid="5"
            neighbourhood1={neighbourhood1}
            neighbourhood2={neighbourhood2}
            // neighbourhood1={neighbourhood1}
            // neighbourhood2={neighbourhood2}
            windholon={true}
          />
        </ContentBlock>
        <ContentBlock colorClass="bg-split-white-blue"></ContentBlock>
      </main>
    </div>
  );
}
