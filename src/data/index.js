import floors from './floor.json';
import tops from './countertop.json';

import tile0 from "../assets/tiles/00.jpg";
import tile1 from "../assets/tiles/01.jpg";
import tile2 from "../assets/tiles/02.jpg";
import tile3 from "../assets/tiles/03.jpg";
import tile4 from "../assets/tiles/04.jpg";
import tile5 from "../assets/tiles/05.jpg";

import tilesInfo from './tiles_info.json';


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

// export const getImageURL = (floor, top) => {
//     return new URL(`../assets/renders/render_${top.code}_${floor.code}.png`, import.meta.url).href;
// }


export const getImageURL = (floor, top) => {
    console.log({
        floor,
        top
    });
    // const name = top.name.split(".").slice(0, -1).join("");
    const fileCode = top.name.replace(/ /g, '_').toUpperCase();

   
    console.log("debug: " + `../assets/renders/render_countertop_${fileCode}_floor_NONE.png`);
    return new URL(`../assets/renders/render_countertop_${fileCode}_floor_NONE.png`, import.meta.url).href;
}

// export const getFloors = () => floors;
// export const getTops = () => tops;
// Generated image imports
import tiles_lq_1 from "../assets/tiles_lq/AQUA_BEIGE.png";
import tiles_lq_2 from "../assets/tiles_lq/AQUA_BLACK.png";
import tiles_lq_3 from "../assets/tiles_lq/AQUA_MULTI_COLOUR.png";
import tiles_lq_4 from "../assets/tiles_lq/AQUA_OFF_WHITE.png";
import tiles_lq_5 from "../assets/tiles_lq/CL_BELLEZA.png";
import tiles_lq_6 from "../assets/tiles_lq/CL_BLACK_DONGRI.png";
import tiles_lq_7 from "../assets/tiles_lq/CL_BLACK_RAFEAL_CLOSE_UP_3.png";
import tiles_lq_8 from "../assets/tiles_lq/CL_BLUE_ATTORIUM_CLOSE_UP.png";
import tiles_lq_9 from "../assets/tiles_lq/CL_BRUNELLO.png";
import tiles_lq_10 from "../assets/tiles_lq/CL_BRUNELLO_CLOSE_UP.png";
import tiles_lq_11 from "../assets/tiles_lq/COPY_OF_ONYX_GOLDEN_APAIRY_CLOSE_UP_1.png";
import tiles_lq_12 from "../assets/tiles_lq/GALAXY_BEIGE_CLOSE_UP.png";
import tiles_lq_13 from "../assets/tiles_lq/GALAXY_WHITE.png";
import tiles_lq_14 from "../assets/tiles_lq/GRIT_CREAM_ICE.png";
import tiles_lq_15 from "../assets/tiles_lq/GRIT_PURE_BLACK.png";
import tiles_lq_16 from "../assets/tiles_lq/GRIT_PURE_WHITE.png";
import tiles_lq_17 from "../assets/tiles_lq/GRIT_WHITE_SAND.png";
import tiles_lq_18 from "../assets/tiles_lq/MANHATTEN_BEIGE.png";
import tiles_lq_19 from "../assets/tiles_lq/MANHATTEN_BROWN.png";
import tiles_lq_20 from "../assets/tiles_lq/MANHATTEN_GRAY.png";
import tiles_lq_21 from "../assets/tiles_lq/MULTI_BLACK_FORREST.png";
import tiles_lq_22 from "../assets/tiles_lq/MULTI_RAIN_FORREST.png";
import tiles_lq_23 from "../assets/tiles_lq/ONYX_GOLDEN_APAIRY.png";
import tiles_lq_24 from "../assets/tiles_lq/ONYX_GOLDEN_APAIRY_(WITH_LIGHT).png";
import tiles_lq_25 from "../assets/tiles_lq/ONYX_MOSIAC_PINK(WITH_LIGHT).png";
import tiles_lq_26 from "../assets/tiles_lq/ONYX_MOSIAC_PINK.png";
import tiles_lq_27 from "../assets/tiles_lq/PLAIN_BEIGE_CLOSE_UP.png";

const tiles_lq = [
    {
        "filename": "Aqua Beige.png",
        "code": "AQUABEIGE.PNG",
        "image": tiles_lq_1, // Add your image import here
        "name": "Aqua Beige",
    },
    {
        "filename": "Aqua Black.png",
        "code": "AQUABLACK.PNG",
        "image": tiles_lq_2, // Add your image import here
        "name": "Aqua Black",
    },
    {
        "filename": "Aqua Multi Colour.png",
        "code": "AQUAMULTICOLOUR.PNG",
        "image": tiles_lq_3, // Add your image import here
        "name": "Aqua Multi Colour",
    },
    {
        "filename": "Aqua Off White.png",
        "code": "AQUAOFFWHITE.PNG",
        "image": tiles_lq_4, // Add your image import here
        "name": "Aqua Off White",
    },
    {
        "filename": "CL Belleza.png",
        "code": "CLBELLEZA.PNG",
        "image": tiles_lq_5, // Add your image import here
        "name": "CL Belleza",
    },
    {
        "filename": "CL Black Dongri.png",
        "code": "CLBLACKDONGRI.PNG",
        "image": tiles_lq_6, // Add your image import here
        "name": "CL Black Dongri",
    },
    {
        "filename": "CL Black Rafeal Close Up 3.png",
        "code": "CLBLACKRAFEALCLOSEUP3.PNG",
        "image": tiles_lq_7, // Add your image import here
        "name": "CL Black Rafeal Close Up 3",
    },
    {
        "filename": "CL Blue Attorium Close Up.png",
        "code": "CLBLUEATTORIUMCLOSEUP.PNG",
        "image": tiles_lq_8, // Add your image import here
        "name": "CL Blue Attorium Close Up",
    },
    {
        "filename": "CL Brunello Close Up.png",
        "code": "CLBRUNELLOCLOSEUP.PNG",
        "image": tiles_lq_9, // Add your image import here
        "name": "CL Brunello Close Up",
    },
    {
        "filename": "CL Brunello.png",
        "code": "CLBRUNELLO.PNG",
        "image": tiles_lq_10, // Add your image import here
        "name": "CL Brunello",
    },
    {
        "filename": "Copy of Onyx Golden Apairy Close Up 1.png",
        "code": "COPYOFONYXGOLDENAPAIRYCLOSEUP1.PNG",
        "image": tiles_lq_11, // Add your image import here
        "name": "Copy of Onyx Golden Apairy Close Up 1",
    },
    {
        "filename": "Galaxy Beige Close Up.png",
        "code": "GALAXYBEIGECLOSEUP.PNG",
        "image": tiles_lq_12, // Add your image import here
        "name": "Galaxy Beige Close Up",
    },
    {
        "filename": "Galaxy White.png",
        "code": "GALAXYWHITE.PNG",
        "image": tiles_lq_13, // Add your image import here
        "name": "Galaxy White",
    },
    {
        "filename": "Grit Cream Ice.png",
        "code": "GRITCREAMICE.PNG",
        "image": tiles_lq_14, // Add your image import here
        "name": "Grit Cream Ice",
    },
    {
        "filename": "Grit Pure Black.png",
        "code": "GRITPUREBLACK.PNG",
        "image": tiles_lq_15, // Add your image import here
        "name": "Grit Pure Black",
    },
    {
        "filename": "Grit Pure White.png",
        "code": "GRITPUREWHITE.PNG",
        "image": tiles_lq_16, // Add your image import here
        "name": "Grit Pure White",
    },
    {
        "filename": "Grit White Sand.png",
        "code": "GRITWHITESAND.PNG",
        "image": tiles_lq_17, // Add your image import here
        "name": "Grit White Sand",
    },
    {
        "filename": "Manhatten Beige.png",
        "code": "MANHATTENBEIGE.PNG",
        "image": tiles_lq_18, // Add your image import here
        "name": "Manhatten Beige",
    },
    {
        "filename": "Manhatten Brown.png",
        "code": "MANHATTENBROWN.PNG",
        "image": tiles_lq_19, // Add your image import here
        "name": "Manhatten Brown",
    },
    {
        "filename": "Manhatten Gray.png",
        "code": "MANHATTENGRAY.PNG",
        "image": tiles_lq_20, // Add your image import here
        "name": "Manhatten Gray",
    },
    {
        "filename": "Multi Black Forrest.png",
        "code": "MULTIBLACKFORREST.PNG",
        "image": tiles_lq_21, // Add your image import here
        "name": "Multi Black Forrest",
    },
    {
        "filename": "Multi Rain Forrest.png",
        "code": "MULTIRAINFORREST.PNG",
        "image": tiles_lq_22, // Add your image import here
        "name": "Multi Rain Forrest",
    },
    {
        "filename": "Onyx Golden Apairy.png",
        "code": "ONYXGOLDENAPAIRY.PNG",
        "image": tiles_lq_23, // Add your image import here
        "name": "Onyx Golden Apairy",
    },
    {
        "filename": "Onyx Golden Apairy (With Light).png",
        "code": "ONYXGOLDENAPAIRY(WITHLIGHT).PNG",
        "image": tiles_lq_24, // Add your image import here
        "name": "Onyx Golden Apairy (With Light)",
    },
    {
        "filename": "Onyx Mosiac Pink(With Light).png",
        "code": "ONYXMOSIACPINK(WITHLIGHT).PNG",
        "image": tiles_lq_25, // Add your image import here
        "name": "Onyx Mosiac Pink(With Light)",
    },
    {
        "filename": "Onyx Mosiac Pink.png",
        "code": "ONYXMOSIACPINK.PNG",
        "image": tiles_lq_26, // Add your image import here
        "name": "Onyx Mosiac Pink",
    },
    {
        "filename": "Plain Beige Close Up.png",
        "code": "PLAINBEIGECLOSEUP.PNG",
        "image": tiles_lq_27, // Add your image import here
        "name": "Plain Beige Close Up",
    },
    // ... (other objects)
];


export const getFloors = () => tiles;
export const getTops = () => tiles_lq;

// export const getTops = () => tilesInfo.map(async info => {
//     console.log({
//         info
//     });
//     const name = info.filename.split(".").slice(0, -1).join("");
//     const fileCode = name.replace(/ /g, '_').toUpperCase();
//     const fileURL = await import(`../assets/tiles_lq/${fileCode}.png`);

//     console.log(info, fileURL);
//     return (
//         {
//             code: info.code,
//             name: name,
//             image: fileURL.default
//         }
//     );
// });


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


