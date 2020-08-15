import React from "react";

export default function MailCounter({ counter, setCounter }) {
    return (
        <>
            <button type="button" onClick={() => setCounter(counter - 1)}>-</button>
            <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
}
