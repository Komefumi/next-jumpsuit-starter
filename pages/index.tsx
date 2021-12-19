import type { NextPage } from "next";
import HomeLayout from "layouts/HomeLayout";
import { generateWithSecondaryTitle } from "utils/site";
import { SITE_TITLE } from "config/site";

const PAGE_TITLE = generateWithSecondaryTitle("Home Page");

const Home: NextPage = () => {
  return (
    <HomeLayout title={PAGE_TITLE}>
      <div className="container">
        <h1>{SITE_TITLE}</h1>
      </div>
    </HomeLayout>
  );
};

export default Home;
