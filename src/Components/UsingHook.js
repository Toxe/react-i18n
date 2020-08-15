import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { dice } from "../dice";
import MailCounter from "./MailCounter";

const Component = styled.div`
    background-color: bisque;
    padding: 5px;
`;

export default function UsingHook() {
    const { t } = useTranslation();
    const number = dice();
    const [mails, setMails] = useState(2);

    return (
        <Component>
            <h3>[UsingHook] {t("headline")}</h3>
            <div>{t("paragraph")}</div>
            <div>{t("random", { number })}</div>
            <div>{t("you_got_mail", { mails, count: mails })} <MailCounter counter={mails} setCounter={setMails} /></div>
        </Component>
    );
}
