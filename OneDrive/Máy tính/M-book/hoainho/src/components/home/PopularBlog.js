import React from 'react'
export default function PopulerPost() {
    return (
        <div className='popularBlog'>
            <div className='popularBook__header'>
                <h2>- Popular Blog -</h2>
            </div>
            <div className='popularBlog__container'>
                <div className='row no-gutters'>
                    <figure className="c-12 m-4 l-4 snip0021">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample22.jpg" alt="sample22" />
                        <figcaption>
                        <div>
                            <h2>What <span>state</span> do you live in?</h2>
                        </div>
                        <div>
                            <p>Denial. Miss Wormwood: I don't suppose I can argue with that.</p>
                            <div className="curl" />
                        </div>
                        <a href="/ss"> </a>
                        </figcaption>
                    </figure>
                    <figure className="c-12 m-4 l-4 snip0021 hover">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample20.jpg" alt="sample20" />
                        <figcaption>
                        <div>
                            <h2>If we wanted more <span>leisure</span></h2>
                        </div>
                        <div>
                            <p>We'd invent machines that do things less efficiently.</p>
                            <div className="curl" />
                        </div>
                        <a href="/ss"> </a>
                        </figcaption>
                    </figure>
                    <figure className="c-12 m-4 l-4 snip0021">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" alt="sample21" />
                        <figcaption>
                        <div>
                            <h2>I <span>propose</span> we leave <span>math</span> </h2>
                        </div>
                        <div>
                            <p>To the machines and go play outside.</p>
                            <div className="curl" />
                        </div>
                        <a href="/ss"> </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}
