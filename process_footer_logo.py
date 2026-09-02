
from PIL import Image
import numpy as np
import sys

def remove_black_and_crop(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    r, g, b, a = data.T
    
    # Define "black" as RGB values below a certain threshold (e.g. 25)
    black_areas = (r < 25) & (g < 25) & (b < 25)
    
    # Make black areas transparent
    data[..., 3][black_areas.T] = 0
    
    img_transparent = Image.fromarray(data)
    img_transparent.save("public/images/brand/footer-logo-transparent.png", "PNG")

remove_black_and_crop("public/images/brand/footer-logo-latest.png", "public/images/brand/footer-logo-transparent.png")
print("Done")

