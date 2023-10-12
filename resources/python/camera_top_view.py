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

# Loop through each texture for the cube
for i, cube_image_filename in enumerate(image_filenames):
    for j, plane_image_filename in enumerate(image_filenames):
        # Add a new cube
        bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 1))
        cube = bpy.context.object

        # Add a new plane
        bpy.ops.mesh.primitive_plane_add(size=10)
        plane = bpy.context.object

        # Create a new material for the cube
        cube_material = bpy.data.materials.new(name=f"Cube_Material_{i}")
        cube_material.use_nodes = True
        cube_nodes = cube_material.node_tree.nodes
        cube_principled = cube_nodes.get("Principled BSDF")

        # Create a texture node for the cube
        cube_texture_node = cube_nodes.new(type='ShaderNodeTexImage')
        cube_texture_node.location = (-200, 0)

        # Load the image texture for the cube
        cube_image_path = os.path.join(textures_directory, cube_image_filename)
        cube_texture = bpy.data.textures.new(f"Cube_Texture_{i}", type='IMAGE')
        cube_texture.image = bpy.data.images.load(cube_image_path)

        # Link the texture node to the shader node for the cube
        cube_texture_node.image = cube_texture.image
        cube_material.node_tree.links.new(cube_texture_node.outputs[0], cube_principled.inputs["Base Color"])

        # Assign the material to the cube
        cube.data.materials.append(cube_material)

        # Create a new material for the plane
        plane_material = bpy.data.materials.new(name=f"Plane_Material_{j}")
        plane_material.use_nodes = True
        plane_nodes = plane_material.node_tree.nodes
        plane_principled = plane_nodes.get("Principled BSDF")

        # Create a texture node for the plane
        plane_texture_node = plane_nodes.new(type='ShaderNodeTexImage')
        plane_texture_node.location = (-200, 0)

        # Load the image texture for the plane
        plane_image_path = os.path.join(textures_directory, plane_image_filename)
        plane_texture = bpy.data.textures.new(f"Plane_Texture_{j}", type='IMAGE')
        plane_texture.image = bpy.data.images.load(plane_image_path)

        # Link the texture node to the shader node for the plane
        plane_texture_node.image = plane_texture.image
        plane_material.node_tree.links.new(plane_texture_node.outputs[0], plane_principled.inputs["Base Color"])

        # Assign the material to the plane
        plane.data.materials.append(plane_material)

        # Set the camera to orthographic and position it above the cube and plane
        bpy.ops.object.camera_add(location=(0, 0, 10))
        camera = bpy.context.object
        bpy.context.scene.camera = camera
        bpy.context.scene.camera.data.type = 'ORTHO'
        bpy.context.scene.camera.data.ortho_scale = 5  # Adjust the scale as needed

        # Set the output file path for this render
        output_filepath = os.path.join(output_directory, f"render_{i:02d}_{j:02d}.png")
        bpy.context.scene.render.filepath = output_filepath

        # Render the scene
        bpy.ops.render.render(write_still=True)

        # Remove the cube, plane, and camera to prepare for the next iteration
        bpy.data.objects.remove(cube)
        bpy.data.objects.remove(plane)
        bpy.data.objects.remove(camera)

# Reset the file path to its default value
bpy.context.scene.render.filepath = '//'
