
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function ScatchGAN() {
    return (
        <div id="contents">
            <div className="clearfix">
                <div className="sidebar">
                    <div>
                        <h2>Practices</h2>
                        <ul>
                            <li>
                                <Link to="/gan/sketch">Pix2Pix GAN</Link>
                            </li>

                            <li>
                                <Link to="/gan/colorgan">Color GAN</Link>
                            </li>
                            <li>
                                <Link to="/gan/dcgan">DC GAN</Link>
                            </li>
                            <li>
                                <Link to="/gan/cycle">Cycle GAN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <h1>Pix2Pix GAN</h1>
                    <h2>Skatch to Color Image</h2>
                    <br />
                    <div class="">
                        <div class="box">
                            <img src="/images/sctach1.png" alt="Img" height="300" width="584" />
                        </div>
                    </div>
                    <h4>About Pix2Pix GAN</h4>
                    <p>
                        Pix2Pix is a Generative Adversarial Network, or GAN, model designed for general purpose image-to-image
                        translation.The GAN architecture is an approach to training a generator model,
                        typically used for generating images. A discriminator model is trained to classify images
                        as real (from the dataset) or fake (generated), and the generator is trained to fool the discriminator model.
                    </p>
                    <h4>About Scatch to Color</h4>
                    <p>
                        Using this Modal we can convert a human sketch to colorfull image. We trained our model for <b>2500 </b>
                        set of sketch and color images. We trained Model for <b>300</b> epochs and get better results.
                    </p>
                    <h4>Outputs</h4>
                    <div class="box">
                        <img src="/images/sketch5.png" alt="Img" height="300" width="584" />
                    </div>
                    <br /><br /><br />
                    <div class="box">
                        <img src="/images/sketch2.png" alt="Img" height="300" width="584" />
                    </div>
                    <br /><br /><br />
                    <div class="box">
                        <img src="/images/sketch3.png" alt="Img" height="300" width="584" />
                    </div>
                    <br /><br /><br />
                    <div class="box">
                        <img src="/images/sketch4.png" alt="Img" height="300" width="584" />
                    </div>
                    <h4>Note Book</h4>
                    <a
                        target="_blank"
                        href="https://colab.research.google.com/drive/1y01H_rD8y5NE8ASA2ZMRyvZwX7qdFsaZ?authuser=2"
                        className="subscribe">
                        Download Notebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ScatchGAN;