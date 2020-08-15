import React, { Suspense } from "react";
import UsingHook from "./UsingHook";

export default function App() {
    return (
        <Suspense fallback="loading">
            <UsingHook />
        </Suspense>
    );
}
