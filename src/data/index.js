import floors from './floor.json';
import tops from './countertop.json';

export const getImageURL = (floor, top) => {
    const apiURL = `https://app.cosentino.com/intranet/visualizer/api/app/picture/modern-kitchen/`;
    const imageURL = apiURL + `pov/floor.model.${floor.code}_kitchen.model.${top.code}`
    return imageURL;
}

export const getFloors = () => floors;
export const getTops = () => tops;


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


