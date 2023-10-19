import bpy
import os

# Set the render output format to PNG
bpy.context.scene.render.image_settings.file_format = 'PNG'

# Directory to save the renders
output_directory = r'C:\workspace\interio\resources\python\output'

# Directory containing your local images
textures_directory = r'C:\workspace\interio\resources\materials\tiles'

# Create the directory if it doesn't exist
os.makedirs(output_directory, exist_ok=True)

# List of image filenames in the textures directory
image_filenames = [f for f in os.listdir(textures_directory) if f.endswith(('.jpg', '.png', '.jpeg'))]

# Find the labeled objects ("wall" and "floor") in the existing model
floor = bpy.data.objects.get("Plane.001")
wall1 = bpy.data.objects.get("tabletop.001")

materials = [];


for i, image_filename in enumerate(image_filenames):
    wall_material = bpy.data.materials.new(name=f"Wall_Material_{i}")
    wall_material.use_nodes = True
    wall_nodes = wall_material.node_tree.nodes
    wall_principled = wall_nodes.get("Principled BSDF")

    # Create a texture node for the wall
    wall_texture_node = wall_nodes.new(type='ShaderNodeTexImage')
    wall_texture_node.location = (-200, 0)

    # Load the image texture for the wall
    wall_image_path = os.path.join(textures_directory, image_filename)
    wall_texture = bpy.data.textures.new(f"Wall_Texture_{i}", type='IMAGE')
    wall_texture.image = bpy.data.images.load(wall_image_path)

    # Link the texture node to the shader node for the wall
    wall_texture_node.image = wall_texture.image
    wall_material.node_tree.links.new(wall_texture_node.outputs[0], wall_principled.inputs["Base Color"])
    materials.append(wall_material)

if wall1 and floor:
    # Loop through each texture for the wall
    for i, wall_image_filename in enumerate(image_filenames):
        # Loop through each texture for the floor
        for j, floor_image_filename in enumerate(image_filenames):

            # Assign the material to the wall
            wall1.data.materials.append(materials[i])

            # Assign the material to the floor
            floor.data.materials.append(materials[j])

            # Set the output file path for this render
            output_filepath = os.path.join(output_directory, f"render_{i:02d}_{j:02d}.png")
            bpy.context.scene.render.filepath = output_filepath

            # Render the scene
            bpy.ops.render.render(write_still=True)

            # Remove the materials from the objects to prepare for the next iteration
            wall1.data.materials.clear()
            floor.data.materials.clear()

# Reset the file path to its default value
bpy.context.scene.render.filepath = '//'