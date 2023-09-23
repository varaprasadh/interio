import { useEffect, useState } from 'react';
import './visualizer.css';
import { getFloors, getImageURL, getTops } from '../data';

const floors = getFloors();
const tops = getTops();

function TilesPreviewGrid({ tiles, activeItem, onSelect = () => {} }){
    return (
        <div className="tiles-grid">
            {
                tiles.map(tile => (
                    <div key={tile.key} className={`tile ${activeItem.code === tile.code && 'active'}`} onClick={()=>onSelect(tile)}>
                        <div className="tile-img">
                            <img src={tile.image} alt="tile" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default function Visualizer(props) {
    const [floor, setFloor] = useState(floors[0]);
    const [top, setTop] = useState(tops[0]);
    const [tab, setTab] = useState('floor');

    const [img, setImg] = useState(getImageURL(floors[0], tops[0]));

    useEffect(()=> {
        setImg(getImageURL(floor, top));
    }, [top, floor]);

    return (
        <div className="container">
            <div className="tiles-preview" >
                <div className="tabs">
                    <div className={`tab ${tab === 'floor' && 'active'}`} onClick={() => setTab('floor')}>Floors</div>
                    <div className={`tab ${tab === 'top' && 'active'}`} onClick={()=>setTab('top')}>CounterTop</div>
                </div>
                {tab === 'floor' && <TilesPreviewGrid tiles={floors} activeItem={floor} onSelect={(floor) => setFloor(floor)}/>}
                {tab === 'top' && <TilesPreviewGrid tiles={tops} activeItem={top} onSelect={top => setTop(top)}/>}
            </div>
            <div className="render-preview">
                <img src={img} alt='rendered image'/>
            </div>
        </div>
    )
}