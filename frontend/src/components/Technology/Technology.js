import React from "react";
import "./Technology.css";
import Navbar from "../Navbar/Navbar";
import image from  "../../image/table.PNG"
const Technology = () => {
  return (


<>

<Navbar></Navbar>


    <div className="technology">
      <h1>Deep Learning Algorithms Used</h1>
      <div className="algorithm">
        <h2>Super-Resolution Convolutional Neural Network (SRCNN)</h2>
        <p>
        The Super-Resolution Convolutional Neural Network (SRCNN) is a deep learning architecture specifically designed for image super-resolution. It aims to enhance the resolution and quality of low-resolution images by learning the mapping between low-resolution and high-resolution image patches.
        </p>
      </div>
      <div className="algorithm">
        <h2>UNET</h2>
        <p>
        UNET is a popular convolutional neural network (CNN) architecture commonly used for semantic segmentation tasks in computer vision.
        It employs an encoder-decoder structure with skip connections, enabling it to capture both local and global features while preserving spatial information.
        </p>
      </div>
      <div className="algorithm">
        <h2>DAE</h2>
        <p>
        DAE is an unsupervised learning algorithm that utilizes an encoder-decoder architecture to learn compact representations of input data.
It is trained to reconstruct clean data from corrupted or noisy input, allowing it to effectively denoise and extract meaningful features.
        </p>
      </div>

      <div className="algorithm">
        <h1> Comparing Trained models:</h1>
        <p>
        DAE is an unsupervised learning algorithm that utilizes an encoder-decoder architecture to learn compact representations of input data.
It is trained to reconstruct clean data from corrupted or noisy input, allowing it to effectively denoise and extract meaningful features.
        </p>
      </div>


     

      <div className="algorithm">
        <h2> PSNR</h2>
        <p>
        PSNR measures the difference between two images in terms of their pixel values. It calculates
the ratio between the maximum possible value of the image's pixel (for example, 255 for an 8-
bit grayscale image) and the mean squared error between the two images. Higher PSNR values
indicate a smaller difference between the two images. A PSNR value of 35 dB for a deblurred
image is a relatively high value, indicating that the deblurred image is similar to the original
image.
 </p>
      </div>
      <div className="algorithm">
        <h2> SSIM</h2>
        <p>
        SSIM compares the structural similarity between two images, taking into account luminance,
contrast, and structural information. It measures the similarity between two images by
comparing the local patterns of pixels between them. SSIM values range from -1 to 1, with 1
indicating a perfect match and -1 indicating no similarity at all.
Both PSNR and SSIM are widely used in image and video processing, and they have their own
advantages and disadvantages depending on the application. PSNR is simpler to calculate and
is often used as a benchmark for image compression algorithms. SSIM, on the other hand, is
more complex and takes into account human visual perception.
 </p>
      </div>

      <div className="algorithm">
        <h2> Validation Loss</h2>
        <p>
        Validation loss metrics is also considered in conjugation with PSNR
and SSIM. It measures the difference between the predicted output and the true output on a
validation dataset, which is a subset of the data used during training. The lower the validation
loss, the better the model's generalization performance. </p>
      </div>


    <div className="algorithm">
        <h1>Comparison Table of Diffrent Models</h1>
        <img src={image}></img></div>
      </div>

    </>
  );
};

export default Technology;