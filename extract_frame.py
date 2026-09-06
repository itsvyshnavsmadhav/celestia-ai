import cv2
import os

video_path = r"c:\Users\vyshn\OneDrive\Desktop\celestia-ai\public\VN20260831_225301.mp4"
output_path = r"c:\Users\vyshn\OneDrive\Desktop\celestia-ai\public\hero-poster.jpg"

if not os.path.exists(video_path):
    print("Video file not found")
    exit(1)

cap = cv2.VideoCapture(video_path)
success, image = cap.read()
if success:
    cv2.imwrite(output_path, image)
    print("Successfully extracted frame")
else:
    print("Failed to read video")
cap.release()
