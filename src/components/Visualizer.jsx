import { useEffect, useState } from 'react';
import { Tabs } from 'antd';

import './visualizer.css';
import { getTiles, getAllModels, getPreviewImageByParams } from '../data';

import ModelPreviewList from "./ModelPreviewList/Index";
import { CheckOutlined } from '@ant-design/icons';


const tiles = getTiles();

const models = getAllModels();


function TilesPreviewGrid({ tiles, activeItem, onSelect = () => {} }){
    return (
        <div className="tiles-grid">
            {
                tiles.map(tile => (
                    <div key={tile.key} className="tile" onClick={()=>onSelect(tile)}>
                        <div className="tile-img">
                            {
                                tile.code === activeItem.code && (
                                    <div className="tile-img-overlay">
                                        <CheckOutlined style={{ fontSize: "2rem", color: "white" }} />
                                    </div>
                                )
                            }
                            <img src={tile.preview} alt="tile" />
                        </div>
                        <div className="tile-img-label">
                            {tile.name}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

function CustomizingBar({ 
        onTileSelect = ({ type, tile }) => {},
        onModelSelect = (model) => {},
        currentCounterTop = {},
        currentFloor = {},
        currentModel = {},
    }) {
    const items = [
        {
            key: '1',
            label: 'Colors',
            children: <TilesPreviewGrid tiles={tiles} activeItem={currentCounterTop} onSelect={tile => onTileSelect("counterTop", tile)} />,
        },
        {
            key: '2',
            label: 'Ambients',
            children: <ModelPreviewList onSelectModel={onModelSelect} activeModel={currentModel}/>,
        },
    ]
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className="tiles-preview" >
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default function Visualizer(props) {


    // select a default model
    const [model, setModel] = useState(models[0]);
    const [counterTop, setCounterTop] = useState(tiles[0]);
    const [floor, setFloor] = useState(null);


    const [img, setImg] = useState(model.preview);

    const [loading, setLoading] = useState(false);

    const onTileSelect = (type, tile) => {
        if (type === "counterTop") {
            setCounterTop(tile);
        } else {
            setFloor(tile);
        }
    }

    useEffect(()=> {
        const renderInfo = getPreviewImageByParams({ modelCode: model.code, counterTop: counterTop.code });
        console.log({ renderInfo, model, counterTop });
        setImg(renderInfo.render);
    }, [floor, counterTop, model])

    return (
        <div className="container">
            <div className="render-preview">
                <img src={img} alt='rendered image' onLoad={() => setLoading(false)} />
                {
                    loading && (
                        <div className='loader'>
                            <div>Loading...</div>
                        </div>
                    )
                }
            </div>
            <CustomizingBar
                onTileSelect={onTileSelect}
                currentCounterTop={counterTop}
                currentFloor={floor}
                currentModel={model}
                onModelSelect={model => setModel(model)}
            />
        </div>
    )
}