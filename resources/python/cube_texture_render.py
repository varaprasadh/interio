import bpy
import os

# Set the render output format to PNG
bpy.context.scene.render.image_settings.file_format = 'PNG'

# Directory to save the renders
output_directory = r'C:\Users\Varaprasadh\workspace\lab\interio\resources\output'

# Directory containing your local images
textures_directory = r'C:\Users\Varaprasadh\workspace\lab\interio\resources\materials\tiles'

# Create the directory if it doesn't exist
os.makedirs(output_directory, exist_ok=True)

# List of image filenames in the textures directory
image_filenames = [f for f in os.listdir(textures_directory) if f.endswith(('.jpg', '.png', '.jpeg'))]

# Render a cube for each texture
for i, image_filename in enumerate(image_filenames):
    # Add a new cube
    bpy.ops.mesh.primitive_cube_add(scale=(1, 1, 1))
    cube = bpy.context.object

    # Create a new material for the cube
    material = bpy.data.materials.new(name=f"Material_{i}")
    material.use_nodes = True
    nodes = material.node_tree.nodes
    principled = nodes.get("Principled BSDF")

    # Create a texture node and link it to the shader
    texture_node = nodes.new(type='ShaderNodeTexImage')
    texture_node.location = (-200, 0)

    # Load the image texture
    image_path = os.path.join(textures_directory, image_filename)
    texture = bpy.data.textures.new(f"Texture_{i}", type='IMAGE')
    texture.image = bpy.data.images.load(image_path)

    # Link the texture node to the shader node
    texture_node.image = texture.image
    material.node_tree.links.new(texture_node.outputs[0], principled.inputs["Base Color"])

    # Assign the material to the cube
    cube.data.materials.append(material)

    # Set the output file path for this render
    output_filepath = os.path.join(output_directory, f"render_{i:02d}.png")
    bpy.context.scene.render.filepath = output_filepath

    # Render the scene
    bpy.ops.render.render(write_still=True)

    # Remove the cube to prepare for the next iteration
    bpy.data.objects.remove(cube)

# Reset the file path to its default value
bpy.context.scene.render.filepath = '//'
