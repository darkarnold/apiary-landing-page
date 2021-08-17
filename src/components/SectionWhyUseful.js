import React from "react";
import ContentWhy from "./ContentWhy";
import prBoost from "../images/PR-boost.png";
import resourceSaving from "../images/resource-saving.png";
import publicize from "../images/publicize.png";

function SectionWhyUseful() {
    const contentWhyUseful = {
        title: "Why is it useful for your company?",
        subtitle: "By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness.",
        topItemImage: resourceSaving,
        topItemTitle: "Resource saving",
        topItemSubtitle: "Delegate tasks for free and get results that can be used in your future work.",
        leftItemImage: publicize,
        leftItemTitle: "Publicize",
        leftItemSubtitle: "We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.",
        rightItemImage: prBoost,
        rightItemTitle: "PR boost",
        rightItemSubtitle: "This will increase the visibility of the company among job seekers and attract those who share the values of your company."
    }
    return (
        <ContentWhy content={contentWhyUseful} />
    )
}

export default SectionWhyUseful;