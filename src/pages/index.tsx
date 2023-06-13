import Hero from "@/components/homepage/hero";
import Quote from "@/components/homepage/quote";
import Steps from "@/components/homepage/steps";
import Usps from "@/components/homepage/usps";
import { getAppLayout } from "@/utils/getAppLayout";

export default function Index(): JSX.Element {
  return (
    <>
      <Hero />
      <Steps />
      <Quote />
      <Usps />
    </>
  );
}

Index.title = "Home";
Index.getLayout = getAppLayout;
