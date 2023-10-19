import floors from './floor.json';
import tops from './countertop.json';

import tile0 from "../assets/tiles/00.jpg";
import tile1 from "../assets/tiles/01.jpg";
import tile2 from "../assets/tiles/02.jpg";
import tile3 from "../assets/tiles/03.jpg";
import tile4 from "../assets/tiles/04.jpg";
import tile5 from "../assets/tiles/05.jpg";

// import render_00_00 from "..\assets\renders\render_00_00.png";

const tiles = [
    {
        code: '00',
        image: tile0
    },
    {
        code: '01',
        image: tile1
    },
    {
        code: '02',
        image: tile2
    },
    {
        code: '03',
        image: tile3
    },
    {
        code: '04',
        image: tile4
    },
    {
        code: '05',
        image: tile5
    },
];

// export const getImageURL = (floor, top) => {
//     const apiURL = `https://app.cosentino.com/intranet/visualizer/api/app/picture/modern-kitchen/`;
//     const imageURL = apiURL + `pov/floor.model.${floor.code}_kitchen.model.${top.code}`
//     return imageURL;
// }

export const getImageURL = (floor, top) => {
    return new URL(`../assets/renders/render_${top.code}_${floor.code}.png`, import.meta.url).href;
}

// export const getFloors = () => floors;
// export const getTops = () => tops;

export const getFloors = () => tiles;
export const getTops = () => tiles;


export const getAllImageURLs = () => {
    const apiURL = `https://app.cosentino.com/intranet/visualizer/api/app/picture/modern-kitchen/`;
    const imageURLs = [];
    for (const floor of floors) {
        for (const top of tops) {
            const imageURL = apiURL + `pov/floor.model.${floor.code}_kitchen.model.${top.code}`;
            imageURLs.push(imageURL);
        }
    }
    return imageURLs;
}
