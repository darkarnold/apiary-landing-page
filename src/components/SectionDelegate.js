import React from "react";
import ContentDelegate from "./ContentDelegate";
import { contentDelegateTasks } from "../data";

function SectionDelegate() {
    return (
        <ContentDelegate content={contentDelegateTasks} />
    );
}

export default SectionDelegate;