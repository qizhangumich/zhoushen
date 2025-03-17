import os
import requests
from bs4 import BeautifulSoup
import time
import random
import json
import re

# Create directories
base_dir = r"D:\personal\ai_projects\5_zhoushen\public\images"
products_dir = os.path.join(base_dir, "products")
os.makedirs(base_dir, exist_ok=True)
os.makedirs(products_dir, exist_ok=True)

# User agent
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

def find_and_download_image(query, save_path, filename):
    """Search for an image and download it with verification"""
    
    print(f"\nSearching for: {query}")
    # Use the URL format suggested by the user
    url = f"https://www.google.com/search?tbm=isch&q={query.replace(' ', '+')}"
    
    try:
        # Get search results
        response = requests.get(url, headers=headers)
        
        # Method 1: Try to find image URLs in the page source
        img_urls = re.findall(r'https://[^"\']+\.(?:jpg|jpeg|png|gif)', response.text)
        
        # Method 2: Use BeautifulSoup to parse the page
        if not img_urls:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Look for image tags
            img_tags = soup.find_all('img')
            for img in img_tags:
                src = img.get('src')
                if src and src.startswith('https://') and not "google" in src.lower():
                    img_urls.append(src)
            
            # Try to find image data in script tags
            script_tags = soup.find_all('script')
            for script in script_tags:
                if script.string and "var data" in str(script.string):
                    matches = re.findall(r'https://[^"\']+\.(?:jpg|jpeg|png|gif)', str(script.string))
                    img_urls.extend(matches)
        
        # Filter URLs to remove Google UI elements
        img_urls = [url for url in img_urls if not any(x in url for x in ['gstatic.com', 'google.com/logos', 'googleusercontent.com/search'])]
        
        if img_urls:
            # Get the first valid image URL
            img_url = img_urls[0]
            full_path = os.path.join(save_path, filename)
            
            # Print information
            print(f"Found image URL: {img_url}")
            print(f"Will download to: {full_path}")
            
            # Verify directory exists
            print(f"Checking if directory exists: {save_path}")
            print(f"Directory exists: {os.path.exists(save_path)}")
            
            # Download image
            img_data = requests.get(img_url, headers=headers).content
            
            # Save with verification
            with open(full_path, 'wb') as f:
                f.write(img_data)
                
            # Verify file exists after download
            if os.path.exists(full_path):
                file_size = os.path.getsize(full_path)
                print(f"SUCCESS: Downloaded {filename} ({file_size} bytes)")
                return True
            else:
                print(f"ERROR: File not saved to {full_path}")
                return False
        else:
            print("No suitable images found")
            return False
            
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return False

# Download essential images with Chinese search terms
essential_images = [
    ("iconic lightening, stage", base_dir, "hero-bg.jpg"),  # Zhou Shen concert stage lighting
    ("周深 演唱会 舞台", base_dir, "hero-bg2.jpg"),   # Alternative search
    ("黑色T恤 模型", products_dir, "tshirt1.jpg"),    # Black t-shirt mockup
    ("演唱会海报 设计", products_dir, "poster1.jpg"),  # Concert poster design
    ("黑胶唱片", products_dir, "vinyl1.jpg"),         # Vinyl record
    ("黑色帽子", products_dir, "cap1.jpg"),           # Black cap
    ("摄影集 相册", products_dir, "photobook1.jpg"),  # Photobook/album
    ("帆布袋", products_dir, "totebag1.jpg"),         # Canvas tote bag
    ("CD唱片集", products_dir, "cdset1.jpg"),         # CD collection
    ("手链 饰品", products_dir, "bracelet1.jpg"),     # Bracelet
    
    # Album covers
    ("周深 专辑封面 唱片", base_dir, "album1.jpg"),    # Generic album cover
    ("周深 专辑封面", base_dir, "album2.jpg"),         # Generic album cover
    ("周深 专辑", base_dir, "album3.jpg"),             # Generic album
    ("周深 歌曲", base_dir, "album4.jpg"),             # Zhou Shen songs
    ("周深 音乐", base_dir, "album5.jpg"),             # Zhou Shen music
    
    # Singles
    ("周深 单曲", base_dir, "single1.jpg"),            # Single
    ("周深 演唱会", base_dir, "single2.jpg"),          # Concert
    ("周深 现场表演", base_dir, "single3.jpg"),         # Live performance
    
    # Gallery images (1-20)
    ("周深 舞台表演 高清", base_dir, "gallery1.jpg"),   # Stage performance HD
    ("周深 演唱会 现场 照片", base_dir, "gallery2.jpg"), # Concert photo
    ("周深 歌手 写真", base_dir, "gallery3.jpg"),       # Singer photoshoot
    ("周深 活动 照片", base_dir, "gallery4.jpg"),       # Event photo
    ("周深 音乐节 表演", base_dir, "gallery5.jpg"),     # Music festival performance
    ("周深 颁奖典礼", base_dir, "gallery6.jpg"),        # Award ceremony
    ("周深 后台 照片", base_dir, "gallery7.jpg"),       # Backstage photo
    ("周深 粉丝见面会", base_dir, "gallery8.jpg"),      # Fan meeting
    ("周深 访谈节目", base_dir, "gallery9.jpg"),        # Interview program
    ("周深 综艺节目", base_dir, "gallery10.jpg"),       # Variety show
    ("周深 舞台装扮", base_dir, "gallery11.jpg"),       # Stage outfit
    ("周深 演出 高清照片", base_dir, "gallery12.jpg"),   # Performance HD photo
    ("周深 音乐会 现场", base_dir, "gallery13.jpg"),     # Concert live
    ("周深 录音棚", base_dir, "gallery14.jpg"),         # Recording studio
    ("周深 MV 截图", base_dir, "gallery15.jpg"),        # Music video screenshot
    ("周深 宣传照", base_dir, "gallery16.jpg"),         # Promotional photo
    ("周深 音乐盛典", base_dir, "gallery17.jpg"),       # Music ceremony
    ("周深 庆典 表演", base_dir, "gallery18.jpg"),      # Celebration performance
    ("周深 精彩瞬间", base_dir, "gallery19.jpg"),       # Wonderful moments
    ("周深 舞台 灯光 特写", base_dir, "gallery20.jpg")  # Stage lighting close-up
]

# Download each essential image
for query, directory, filename in essential_images:
    success = find_and_download_image(query, directory, filename)
    print(f"Downloaded {filename}: {success}")
    time.sleep(2)  # Delay between requests

print("\nDownload process completed. Check the directories for files.")