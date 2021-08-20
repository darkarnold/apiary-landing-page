import React from "react";

function contentWhy(props) {
    return (
        <section className="content content_theme_dark">
            <div className="content__wrapper">
                <h2 className="content__heading content__heading_theme_dark">{props.content.title}</h2>
                <h3 className="content__text content__text_theme_dark">{props.content.subtitle}</h3>
                <div className="grid grid__items">
                    <div className="grid__item">
                        <img src={`${props.content.topItem.image}`} alt={props.content.topItem.title} className="grid__item-image" />
                        <h4 className="grid__title">{props.content.topItem.title}</h4>
                        <p className="grid__subtitle">{props.content.topItem.subtitle}</p>
                    </div>
                    <div className="grid__item">
                        <img src={`${props.content.leftItem.image}`} alt={props.content.leftItem.title} className="grid__item-image" />
                        <h4 className="grid__title">{props.content.leftItem.title}</h4>
                        <p className="grid__subtitle">{props.content.leftItem.subtitle}</p>
                    </div>
                    <div className="grid__item">
                        <img src={`${props.content.rightItem.image}`} alt={props.content.rightItem.title} className="grid__item-image" />
                        <h4 className="grid__title">{props.content.rightItem.title}</h4>
                        <p className="grid__subtitle">{props.content.rightItem.subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contentWhy;