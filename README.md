## TODO
 
- [x] render two objects with combinations for floor and top
- [x] render headless
- store fov for the camera, and set it when rendering
- load a sample model and apply the techniques 
- get the actual model
- render render render

## Steps to make the visualizer work

- Prepare the models
    - set the labels for the walls and floor
    - record the proper camera angle and fov values for a model
- load the models and run the script to render the frames
- load it to actual visualizer react app.


## in order to automate the render, we gotta provide path to the model and python script like below

```bash
blender -b C:\Users\Varaprasadh\workspace\lab\interio\resources\models\interior.blend -P C:\Users\Varaprasadh\workspace\lab\interio\resources\python\rendering_basic_interior_with_labels.py
```


