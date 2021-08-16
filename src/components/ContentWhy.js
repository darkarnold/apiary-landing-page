import React from "react";

function contentWhy(props) {
    return (
        <>
            <h2 className="content__heading content__heading_theme_dark">{props.content.title}</h2>
            <h3 className="content__text content__text_theme_dark">{props.content.subtitle}</h3>
            <div className="grid__items">
                <div className="grid__item">
                    <img src={`${props.content.topItemImage}`} alt="resource saving" className="grid__item-image" />
                    <h4 className="grid__title">{props.content.topItemTitle}</h4>
                    <p className="grid__subtitle">{props.content.topItemSubtitle}</p>
                </div>
                <div className="grid__item">
                    <img src={`${props.content.leftItemImage}`} alt="publicize" className="grid__item-image" />
                    <h4 className="grid__title">{props.content.leftItemTitle}</h4>
                    <p className="grid__subtitle">{props.content.leftItemSubtitle}</p>
                </div>
                <div className="grid__item">
                    <img src={`${props.content.rightItemImage}`} alt="PR boost" className="grid__item-image" />
                    <h4 className="grid__title">{props.content.rightItemTitle}</h4>
                    <p className="grid__subtitle">{props.content.rightItemSubtitle}</p>
                </div>
            </div>
        </>
    )
}

export default contentWhy;