from PIL import Image
import torchvision.transforms as transforms
import torch
import torchvision
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import matplotlib.pyplot as plt
import torchvision.utils as utils
from torchvision.utils import save_image
from pathlib import Path
import os
# from django.conf import settings

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


MEDIA_ROOT = '/home/peter/Development/Final Year Project/final/avishkar/backend/media/'

image_path = str(MEDIA_ROOT) + "/incoming_blurred_images/converted_image.jpg"
image_path_to_save = str(MEDIA_ROOT) + "outgoing_de_blurred_images"


def convert_to_jpg(incoming_image_path):
    # Open the image using Pillow
    incoming_image_path = str(BASE_DIR) + str(incoming_image_path)

    # print("Image path : ", incoming_image_path)
    # print()
    # print()
    # print()
    # print()
    # print()
    # print()

    image = Image.open(incoming_image_path)

    # Convert to RGB mode if not already in RGB
    if image.mode != 'RGB':
        image = image.convert('RGB')

    # Save as JPEG with quality 90
    image.save(incoming_image_path, 'JPEG', quality=90)
    return incoming_image_path


class DeblurCNN(nn.Module):
    def __init__(self):
        super(DeblurCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 64, kernel_size=9, padding=2)
        self.conv2 = nn.Conv2d(64, 32, kernel_size=1, padding=2)
        self.conv3 = nn.Conv2d(32, 3, kernel_size=5, padding=2)

    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.relu(self.conv2(x))
        x = self.conv3(x)
        return x


device = 'cpu'


def save_decoded_image(img, outputpath):
    img_mod = img.view(img.size(0), 3, 224, 224)
    outputpath = outputpath.replace("incoming_blurred_images", "outgoing_de_blurred_images")
    # print(outputpath)
    save_image(img_mod, outputpath)
    return outputpath


def predict(model, image_tensor):
    model.eval()
    with torch.no_grad():
        image_tensor = image_tensor.to(device)
        sharp_tensor = model(image_tensor)
    return sharp_tensor


def deblurimage(blurred_images_path):
    # import torch
    # print("Blurred Images Path: "+blurred_images_path)

    # convert_to_jpg(blurred_images_path+"blurred_image.jpeg",blurred_images_path)

    jpegImage = convert_to_jpg(blurred_images_path)

    # Load the saved model state dictionary
    model_state_dict = torch.load(str(BASE_DIR) + "/models/model21.pth")

    # Create a new instance of the model with the same architecture as the original model
    model = DeblurCNN()
    model.load_state_dict(model_state_dict)

    # Set the model to evaluation mode
    model.eval()
    # print(jpegImage)
    blur_image = Image.open(jpegImage)
    # blur_image.show()
    # Convert grayscale to RGB
    if blur_image.mode == 'L':
        blur_image = blur_image.convert('RGB')

    # Apply transformations to the image
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        # transforms.Resize((224, 224)),
        transforms.ToTensor()
    ])
    tensor_img = transform(blur_image)

    # create a batch of size 1
    blur_tensor = tensor_img.unsqueeze(0)

    # predict the sharp image
    sharp_tensor = predict(model, blur_tensor)

    # save the output image
    img = sharp_tensor.view(sharp_tensor.size(0), 3, 224, 224)
    # print(jpegImage)
    deblurred_image = save_decoded_image(img, jpegImage)

    return deblurred_image

# deblurimage(image_path, image_path_to_save)
