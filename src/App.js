import React, { Suspense } from "react";
import UsingHook from "./Components/UsingHook";
import UsingTrans from "./Components/UsingTrans";

export default function App() {
    return (
        <Suspense fallback="loading">
            <UsingHook />
            <UsingTrans />
        </Suspense>
    );
}
