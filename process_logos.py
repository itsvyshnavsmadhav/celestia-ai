
from PIL import Image
import numpy as np

def remove_black_and_crop(input_path, output_path, crop_only=False):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    r, g, b, a = data.T
    
    # Define "black" as RGB values below a certain threshold (e.g. 20)
    black_areas = (r < 25) & (g < 25) & (b < 25)
    
    # Make black areas transparent
    data[..., 3][black_areas.T] = 0
    
    img_transparent = Image.fromarray(data)
    
    # Get bounding box of non-transparent pixels
    bbox = img_transparent.getbbox()
    if bbox:
        img_transparent = img_transparent.crop(bbox)
        
    img_transparent.save(output_path, "PNG")

remove_black_and_crop("public/images/brand/logo-1.webp", "public/images/brand/logo-text.png")
remove_black_and_crop("public/images/brand/logo-2.webp", "public/images/brand/logo-icon.png")
print("Done")

