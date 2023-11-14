import kitchenTraditional1 from "./kitchens/kitchen_traditional_1.json";
import kitchenModern1 from "./kitchens/kitchen_modern_1.json";
import tiles from "./tiles.json";

const models = [
    kitchenTraditional1,
    kitchenModern1
];

export const getAllModels = () => {
    return models;
};

export const getPreviewImageByParams = ({ modelCode = null, floor = null, counterTop = "" }) => {
    if (modelCode === null) throw new Error("preview image not found");
    const model = models.find(model =>  model.code === modelCode);
    console.log({ model });
    const variation = model.variations.find(variation => variation.counterTop === counterTop && variation.floor === floor);
    console.log({ variation })
    return variation;
}

export const getTiles = () => {
    return tiles;
};

