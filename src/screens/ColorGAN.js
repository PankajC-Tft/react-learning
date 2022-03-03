
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function ColorGAN() {
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
                                <Link to="/gan/sketch">Color GAN</Link>
                            </li>
                            <li>
                                <Link to="/gan/colorgan">DC GAN</Link>
                            </li>
                            <li>
                                <Link to="/gan/cycle">Cycle GAN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <h1>COLOR GAN</h1>
                    <h2>Black & Whiate to  Color Image Generation</h2>
                    <br />
                    <div class="">
                        <div class="box">
                            <img src="/images/colorgan.png" alt="Img" height="300" width="584" />
                        </div>
                    </div>
                    <h4>About COLOR GAN</h4>
                    <p>Controlling Colors of GAN-Generated
                        and Real Images via Color Histograms. ... The recoloring model,
                        ReHistoGAN, is an unsupervised approach trained to encourage the
                        network to keep the original image's content while changing the colors
                        based on the given target histogram.</p>
                    <h4>Note Book</h4>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1oXi0j7IL_oRSLlOtksjgQje4tNskQBZc/view?usp=sharing"
                        className="subscribe">
                        Download Notebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ColorGAN;