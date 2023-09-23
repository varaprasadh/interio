for i, texture in enumerate(tiles):
    bpy.data.materials['plane1'].slot[0].material = bpy.data.materials.get(texture)
    bpy.context.scene.frame_set(1)
    bpy.ops.render.render(write_still=True)

# above code is looking up by material name, lets do it by object name in the scene collection
# Path: resources/python/render.py
for i, texture in enumerate(tiles):
    bpy.data.collections[0].objects['plane1'].material_slots[0].material = bpy.data.materials.get(texture)
    bpy.context.scene.frame_set(i + 1)
    bpy.context.scene.render.filepath = f"{output_path}{texture.replace('.png', '')}_render.png"
    bpy.ops.render.render(write_still=True)
    

# 2nd attempt
tiles_dir = 'C:\Users\Varaprasadh\workspace\lab\interio\resources\materials\tiles'
for i, texture in enumerate(tiles):
    texture_filepath = os.path.join(tiles_dir, texture)
    floor_material = bpy.data.materials.get('plane1')
    floor_material.node_tree.nodes["Principled BSDF"].image = bpy.data.images.load(texture_filepath)
    # Set the shading mode to 'Material Preview' (for Cycles)
    bpy.context.scene.render.engine = 'CYCLES'
    bpy.context.scene.cycles.feature_set = 'EXPERIMENTAL'
    # Update the frame to trigger the keyframe change
    bpy.context.scene.frame_set(i + 1)
    # Set the file name for the rendered image
    bpy.context.scene.render.filepath = f"{output_path}{texture.replace('.png', '')}_render.png"
    # Render the scene
    bpy.ops.render.render(write_still=True)



# 3rd attempt

for i, texture in enumerate(tiles):
    # Create the full texture file path
    texture_filepath = os.path.join(tiles_dir, texture)
    # Set the floor material and texture
    floor_material = bpy.data.materials.get('plane1')
    floor_bsdf = floor_material.node_tree.nodes["Principled BSDF"]
    image_texture = floor_material.node_tree.nodes.new('ShaderNodeTexImage')
    image_texture.image = bpy.data.images.load(texture_filepath)
    floor_material.node_tree.links.new(image_texture.outputs["Color"], floor_bsdf.inputs["Base Color"])
    # Set the shading mode to 'Material Preview' (for Cycles)
    bpy.context.scene.render.engine = 'CYCLES'
    # Update the frame to trigger the keyframe change
    bpy.context.scene.frame_set(i + 1)
    # Set the file name for the rendered image
    texture_filename = texture.split('/')[-1]
    bpy.context.scene.render.filepath = f"{output_path}{texture_filename.replace('.png', '')}_render.png"
    # Render the scene
    bpy.ops.render.render(write_still=True)


    import bpy

# List of floor textures
floor_textures = ['texture1.png', 'texture2.png', 'texture3.png']

# Set the render output path
output_path = "/path/to/render/output/"

# Loop through the textures and render
for i, texture in enumerate(floor_textures):
    # Set the floor material
    floor_material = bpy.data.materials.get('Floor')
    floor_material.node_tree.nodes["Principled BSDF"].image = bpy.data.images.load(texture)

    # Set the shading mode to 'Material Preview' (for Cycles)
    bpy.context.scene.render.engine = 'CYCLES'
    bpy.context.scene.cycles.feature_set = 'EXPERIMENTAL'  # Optional: Enable experimental features
    
    # Update the frame to trigger the keyframe change
    bpy.context.scene.frame_set(i + 1)

    # Set the file name for the rendered image
    bpy.context.scene.render.filepath = f"{output_path}{texture.replace('.png', '')}_render.png"

    # Render the scene
    bpy.ops.render.render(write_still=True)




# Set the output directory for rendered images
import bpy
import os

# Set the output directory for rendered images
output_directory = 'C:\Users\Varaprasadh\workspace\lab\interio\resources\output'


os.makedirs(output_directory, exist_ok=True)

# Create a new scene
bpy.ops.scene.new(type='NEW')

# Set rendering engine to Cycles (you can change it to Eevee if needed)
bpy.context.scene.render.engine = 'CYCLES'

# Set the resolution and output format
bpy.context.scene.render.resolution_x = 1920
bpy.context.scene.render.resolution_y = 1080
bpy.context.scene.render.image_settings.file_format = 'PNG'

# Create a new cube object
bpy.ops.mesh.primitive_cube_add(scale=1)

# Loop through different colors and render
colors = [(1, 0, 0, 1), (0, 1, 0, 1), (0, 0, 1, 1)]  # Red, Green, Blue
for i, color in enumerate(colors):
    # Create a new material with the specified color
    material = bpy.data.materials.new(name=f"Material_{i}")
    material.diffuse_color = color

    # Assign the material to the cube
    bpy.context.object.data.materials.append(material)

    # Set the output file name
    output_file = os.path.join(output_directory, f"cube_{i}.png")
    bpy.context.scene.render.filepath = output_file

    # Render the scene
    bpy.ops.render.render(write_still=True)

# Close Blender after rendering
bpy.ops.wm.quit_blender()


