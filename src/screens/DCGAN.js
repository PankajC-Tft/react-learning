
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function DCGAN() {
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
                    <h1>DC GAN</h1>
                    <h2>Art Generation</h2>
                    <br />
                    <div class="">
                        <div class="box">
                            <img src="/images/dcgan.png" alt="Img" height="300" width="584" />
                        </div>
                    </div>
                    <h4>About DC GAN</h4>
                    <p>
                        The DCGAN is an architecture for learning to generate new content.
                        A DCGAN consists of two parts. In this case, these are:
                    </p>
                    <ul>
                        <li>The discriminator, which learns how to distinguish fake from real objects of the type we’d like to create</li>
                        <li>The generator, which creates new content and tries to fool the discriminator</li>
                    </ul>
                    <p>The basic idea is that both network parts compete with each other. When the discriminator becomes
                        better, the generator needs to become better too, otherwise it can’t fool the discriminator any
                        longer. Similarly, when the generator becomes better, the discriminator has to become better also,
                        else it will lose the ability to distinguish fake from real content.</p>
                    <h4>Note Book</h4>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1D3LGelNUGpU9xa0TQLw3Vgn-vOHtWfjn/view?usp=sharing"
                        className="subscribe">
                        Download Notebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DCGAN;