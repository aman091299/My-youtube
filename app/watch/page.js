import React, { Suspense } from "react";
import WatchClient from "../components/WatchClient";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading video...</div>}>
      <WatchClient />
    </Suspense>
  );
};

export default Page;
