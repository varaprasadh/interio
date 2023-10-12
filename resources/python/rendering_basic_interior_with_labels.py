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

# Find the labeled objects ("wall" and "floor") in the existing model
wall1 = bpy.data.objects.get("wall_1")
wall2 = bpy.data.objects.get("wall_left")
wall3 = bpy.data.objects.get("wall_right")
floor = bpy.data.objects.get("Floor")

if wall1 and floor:
    # Loop through each texture for the wall
    for i, wall_image_filename in enumerate(image_filenames):
        # Loop through each texture for the floor
        for j, floor_image_filename in enumerate(image_filenames):
            # Create a new material for the wall
            wall_material = bpy.data.materials.new(name=f"Wall_Material_{i}")
            wall_material.use_nodes = True
            wall_nodes = wall_material.node_tree.nodes
            wall_principled = wall_nodes.get("Principled BSDF")

            # Create a texture node for the wall
            wall_texture_node = wall_nodes.new(type='ShaderNodeTexImage')
            wall_texture_node.location = (-200, 0)

            # Load the image texture for the wall
            wall_image_path = os.path.join(textures_directory, wall_image_filename)
            wall_texture = bpy.data.textures.new(f"Wall_Texture_{i}", type='IMAGE')
            wall_texture.image = bpy.data.images.load(wall_image_path)

            # Link the texture node to the shader node for the wall
            wall_texture_node.image = wall_texture.image
            wall_material.node_tree.links.new(wall_texture_node.outputs[0], wall_principled.inputs["Base Color"])

            # Assign the material to the wall
            wall1.data.materials.append(wall_material)
            wall2.data.materials.append(wall_material)
            wall3.data.materials.append(wall_material)

            # Create a new material for the floor
            floor_material = bpy.data.materials.new(name=f"Floor_Material_{j}")
            floor_material.use_nodes = True
            floor_nodes = floor_material.node_tree.nodes
            floor_principled = floor_nodes.get("Principled BSDF")

            # Create a texture node for the floor
            floor_texture_node = floor_nodes.new(type='ShaderNodeTexImage')
            floor_texture_node.location = (-200, 0)

            # Load the image texture for the floor
            floor_image_path = os.path.join(textures_directory, floor_image_filename)
            floor_texture = bpy.data.textures.new(f"Floor_Texture_{j}", type='IMAGE')
            floor_texture.image = bpy.data.images.load(floor_image_path)

            # Link the texture node to the shader node for the floor
            floor_texture_node.image = floor_texture.image
            floor_material.node_tree.links.new(floor_texture_node.outputs[0], floor_principled.inputs["Base Color"])

            # Assign the material to the floor
            floor.data.materials.append(floor_material)

            # Set the output file path for this render
            output_filepath = os.path.join(output_directory, f"render_{i:02d}_{j:02d}.png")
            bpy.context.scene.render.filepath = output_filepath

            # Render the scene
            bpy.ops.render.render(write_still=True)

            # Remove the materials from the objects to prepare for the next iteration
            wall1.data.materials.clear()
            wall2.data.materials.clear()
            wall3.data.materials.clear()
            floor.data.materials.clear()

# Reset the file path to its default value
bpy.context.scene.render.filepath = '//'
