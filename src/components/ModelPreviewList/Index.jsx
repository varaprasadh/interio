import React from "react";
import "./index.css";
import { getAllModels } from "../../data";
import { CheckOutlined } from '@ant-design/icons';

const models = getAllModels();


export default function Index( { activeModel = {}, onSelectModel = () => {} }) {
    return (
        <div className="mpl-wrapper">
            <div className="mpl-list">
                {
                    models.map(model => (
                        <div className="mpl-item" onClick={() => onSelectModel(model)}>
                            <div className="mpl-item img">
                                {
                                 activeModel.code === model.code && (
                                    <div className="mpl-overlay">
                                       <CheckOutlined style={{fontSize: "2rem", color: "white" }}/>
                                    </div>
                                 )
                                }
                                <img src={model.preview} alt={model.name}/>
                            </div>
                            <div className="mpl-item-label">
                                {model.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}