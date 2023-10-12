import bpy
import mathutils

# Clear existing mesh objects
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.object.select_by_type(type='MESH')
bpy.ops.object.delete()

# Create floor
bpy.ops.mesh.primitive_plane_add(size=10, enter_editmode=False, align='WORLD', location=(0, 0, 0))
floor = bpy.context.object
floor.name = 'Floor'

# Create walls
bpy.ops.mesh.primitive_cube_add(size=1, enter_editmode=False, align='WORLD', location=(0, 0, 2))
wall1 = bpy.context.object
wall1.scale = (5, 0.1, 2)
wall1.location = (0, 2.45, 1)

bpy.ops.mesh.primitive_cube_add(size=1, enter_editmode=False, align='WORLD', location=(0, 0, 2))
wall2 = bpy.context.object
wall2.scale = (5, 0.1, 2)
wall2.location = (0, -2.45, 1)

bpy.ops.mesh.primitive_cube_add(size=1, enter_editmode=False, align='WORLD', location=(0, 0, 2))
wall3 = bpy.context.object
wall3.scale = (0.1, 5, 2)
wall3.location = (2.45, 0, 1)

bpy.ops.mesh.primitive_cube_add(size=1, enter_editmode=False, align='WORLD', location=(0, 0, 2))
wall4 = bpy.context.object
wall4.scale = (0.1, 5, 2)
wall4.location = (-2.45, 0, 1)

# Apply materials for walls and floor
wall_material = bpy.data.materials.new(name="Wall Material")
floor_material = bpy.data.materials.new(name="Floor Material")

# Assign materials to objects
wall1.data.materials.append(wall_material)
wall2.data.materials.append(wall_material)
wall3.data.materials.append(wall_material)
wall4.data.materials.append(wall_material)
floor.data.materials.append(floor_material)

# Set material colors (you can change these colors as desired)
wall_material.diffuse_color = (0.8, 0.8, 0.8, 1)
floor_material.diffuse_color = (0.5, 0.5, 0.5, 1)

# Create a camera
bpy.ops.object.camera_add(enter_editmode=False, align='WORLD', location=(-2.17, -3.66, 3.56))
camera = bpy.context.object
pi = math.pi
camera.rotation= (64, 0, -31)

# Set the camera as the active camera
bpy.context.scene.camera = camera

# Set up the rendering resolution and output format
bpy.context.scene.render.resolution_x = 1920
bpy.context.scene.render.resolution_y = 1080
bpy.context.scene.render.image_settings.file_format = 'PNG'


