import { Button } from "@cancer-council-queensland/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="p-8 flex gap-4">
      <button
        className="btn btn-md"
        data-theme="onoty"
        onClick={() => alert("Clicked!")}
      >
        This is a html button
      </button>

      <Button color="secondary" data-theme="cancerqld" href="/about">
        This is a React link that looks like a button
      </Button>

      <Button
        color="secondary"
        data-theme="cancerqld"
        onClick={() => alert("Clicked!")}
      >
        This is a React button
      </Button>
    </div>
  );
};

export default Home;
