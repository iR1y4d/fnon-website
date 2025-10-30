import os
from PIL import Image

# Make sure you have pillow-avif-plugin installed for AVIF support
# pip install pillow pillow-avif-plugin

def convert_image(input_path, output_format="webp", quality=80):
    try:
        img = Image.open(input_path).convert("RGB")
        base, _ = os.path.splitext(input_path)
        output_path = f"{base}.{output_format}"
        img.save(output_path, format=output_format.upper(), quality=quality)
        print(f"Converted {input_path} -> {output_path}")
        os.remove(input_path)  # remove the original image
    except Exception as e:
        print(f"Failed to convert {input_path}: {e}")

def convert_folder(folder_path, output_format="webp", quality=80):
    supported_ext = (".jpg", ".jpeg", ".png", ".bmp", ".tiff")
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(supported_ext):
                file_path = os.path.join(root, file)
                convert_image(file_path, output_format, quality)

if __name__ == "__main__":
    folder = os.getcwd()  # Automatically use current directory
    output_format = "avif"  # Change to "webp" if you prefer
    quality = 85  # Compression quality (1-100)

    print(f"Converting images in: {folder}")
    convert_folder(folder, output_format, quality)
    print("Conversion complete!")
