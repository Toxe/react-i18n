import React, { Suspense } from "react";
import UsingHook from "./Components/UsingHook";
import UsingTrans from "./Components/UsingTrans";
import LanguageSelection from "./Components/LanguageSelection";

export default function App() {
    return (
        <Suspense fallback="loading">
            <LanguageSelection />
            <UsingHook />
            <UsingTrans />
        </Suspense>
    );
}
