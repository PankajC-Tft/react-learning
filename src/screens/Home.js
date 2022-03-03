import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div id="contents"> ̰
        <div id="adbox">
          <div className="clearfix">
            <img
              src="images/family-large.jpg"
              alt="Img"
              height="382"
              width="594"
            />
            <div className="detail">
              <h1>
                It’s never easy...
                <br /> When it comes to family.
              </h1>
              <p>
                But we can set
                <br /> everything straight.
              </p>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="clearfix">
            <div className="testimonial">
              <h2>Testimonials</h2>
              <p>
                &ldquo;Generative Adversarial Networks is the most interesting idea in machine learning in last ten years
                &rdquo;
              </p>
              <span>-Yann Lecun (Facebook AI Director)-</span>
            </div>
            <h1>What are the GANS ?</h1>
            <p>
              {/* This website template has been designed by{" "}
              <a href="http://www.freewebsitetemplates.com/">
                Free Website Templates
              </a>{" "} */}
              A generative adversarial network is a class of machine learning frameworks 
              designed by Ian Goodfellow and his colleagues in 2014. 
              Two neural networks contest with each other in a game.
               Given a training set, this technique learns to generate new data 
               with the same statistics as the training set.
              {/* <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>. */}
            </p>
          </div>
        </div>
        <div className="featured">
          <h2>CHOOSE YOUR GAN</h2>
          <ul className="clearfix">
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src="images/cycle_gan.png"
                    alt="Img"
                    height="130"
                    width="197"
                  />
                </div>
              </div>
              <p>
                <b>Cycle GAN</b> The CycleGAN is a technique that involves the 
                automatic training of image-to-image translation models without 
                paired examples. The models are trained in an unsupervised manner 
                using a collection of images from the source and target domain that 
                do not need to be related in any way.
              </p>
              <Link to="/gan/cycle" className="more">
                Read More
              </Link>
            </li>
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src="images/px2pix.png"
                    alt="Img"
                    height="130"
                    width="197"
                  />
                </div>
              </div>
              <p>
                <b>Pix2Pix GAN</b> The Pix2Pix GAN is a general approach 
                for image-to-image translation. It is based on the conditional 
                generative adversarial network, where a target image is generated,
                 conditional on a given input image. ... Pix2Pix GAN provides a general 
                 purpose model and loss function for image-to-image translation.
              </p>
              <Link to="/gan/sketch" className="more">
                Read More
              </Link>
            </li>
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src="images/colorgan.png"
                    alt="Img"
                    height="130"
                    width="197"
                  />
                </div>
              </div>
              <p>
                <b>COLOR GAN</b> Controlling Colors of GAN-Generated 
                and Real Images via Color Histograms. ... The recoloring model,
                 ReHistoGAN, is an unsupervised approach trained to encourage the 
                 network to keep the original image's content while changing the colors 
                 based on the given target histogram.
              </p>
              <Link to="/gan/colorgan" className="more">
                Read More
              </Link>
            </li>
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src="images/dcgan.pbm"
                    alt="Img"
                    height="130"
                    width="197"
                  />
                </div>
              </div>
              <p>
                <b>DC GAN</b> DCGAN is one of the popular and successful 
                network design for GAN. It mainly composes of convolution 
                layers without max pooling or fully connected layers. It uses 
                convolutional stride and transposed convolution for the downsampling 
                and the upsampling. The figure below is the network design for the generator.
              </p>
              <Link to="/gan/dcgan" className="more">
                Read More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;