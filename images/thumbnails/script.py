import os
from PIL import Image
import pillow_avif  # needed for AVIF support

# === AUTO PATHS ===
base_dir = os.path.dirname(os.path.abspath(__file__))  # folder of this script
input_folder = base_dir  # images are in the same folder as the script
output_folder = os.path.join(base_dir, "thumbnails")  # ./thumbnails

# === SETTINGS ===
thumbnail_size = (640, 640)  # width, height

# === CREATE OUTPUT FOLDER IF NOT EXISTS ===
os.makedirs(output_folder, exist_ok=True)

# === PROCESS ALL AVIF IMAGES IN CURRENT FOLDER ===
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".avif"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        try:
            with Image.open(input_path) as img:
                img.thumbnail(thumbnail_size)  # resize maintaining aspect ratio
                img.save(output_path, format="AVIF", quality=80)
                print(f"✅ Saved thumbnail: {output_path}")
        except Exception as e:
            print(f"❌ Error processing {filename}: {e}")
