import os
from PIL import Image
import pillow_avif  # pip install pillow-avif-plugin

def compress_avif(file_path, quality=75):
    try:
        img = Image.open(file_path).convert("RGB")
        img.save(
            file_path,  # overwrite original
            format="AVIF",
            quality=quality,
            optimize=True
        )
        print(f"Compressed: {file_path}")
    except Exception as e:
        print(f"Failed: {file_path} -> {e}")

def compress_folder(folder_path, quality=75):
    folder_path = os.path.abspath(folder_path)
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(".avif"):
                file_path = os.path.join(root, file)
                compress_avif(file_path, quality)

if __name__ == "__main__":
    # Automatically detect the folder where this script is located
    folder = os.path.dirname(os.path.abspath(__file__))
    quality = 65  # adjust 70-85 for smaller size
    print(f"Compressing all AVIF images in: {folder} and subfolders")
    compress_folder(folder, quality)
    print("Compression complete!")
