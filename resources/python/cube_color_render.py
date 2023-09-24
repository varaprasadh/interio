# able to render cubes with different colors
import bpy
import os

# Set the render output format to PNG
bpy.context.scene.render.image_settings.file_format = 'PNG'

# Directory to save the renders
output_directory = r'C:\Users\Varaprasadh\workspace\lab\interio\resources\output'

# Create the directory if it doesn't exist
os.makedirs(output_directory, exist_ok=True)

# Define rainbow colors (ROYGBIV)
colors = [(1, 0, 0, 1), (1, 0.5, 0, 1), (1, 1, 0, 1),
          (0, 1, 0, 1), (0, 0, 1, 1), (0.3, 0, 0.5, 1)]

# Add a new cube
bpy.ops.mesh.primitive_cube_add(scale=(1, 1, 1))
cube = bpy.context.object

# Create a new material for the cube
material = bpy.data.materials.new(name="RainbowMaterial")
material.use_nodes = True
nodes = material.node_tree.nodes
principled = nodes.get("Principled BSDF")

# Create a RGB node for color input
rgb_node = nodes.new(type='ShaderNodeRGB')
rgb_node.location = (-200, 0)

# Link RGB node to the shader node
material.node_tree.links.new(rgb_node.outputs[0], principled.inputs["Base Color"])

# Assign the material to the cube
cube.data.materials.append(material)

# Render the cube with different colors and save them
for i, color in enumerate(colors):
    # Set the color of the RGB node
    rgb_node.outputs[0].default_value = color

    # Set the output file path for this render
    output_filepath = os.path.join(output_directory, f"render_{i:02d}.png")
    bpy.context.scene.render.filepath = output_filepath

    # Render the scene
    bpy.ops.render.render(write_still=True)

# Reset the file path to its default value
bpy.context.scene.render.filepath = '//'
