import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';

const Index = ({ router }) => {
    const head = () => (
        <Head>
            <title>Development Design Business| {APP_NAME}</title>
            <link rel="shortcut icon" href="../static/images/favicon.png"/>
            <meta
                name="description"
                content="Collection of programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Collection of programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <article className="overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="">
                                   The best resources for web developers, creative makers, marketers and technology lovers.
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center pt-4 pb-5">
                                <p className="lead">
                                    Best programming and web development blogs on Design,Development,Tech,Marketing,Business,
                                    Inspirations,Career,Freebies/Free Resources and also photo and video content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                      
                        <div className="row">
                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">React Js</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/react">
                                            <a>
                                                <h3 className="h1">React Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            The world's most popular frontend web development library
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Node Js</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/react">
                                            <a>
                                                <h3 className="h1">Node Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">MEARN Stack</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/react">
                                            <a>
                                                <h3 className="h1">MEARN Stack</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            Find resources of MEARN Stack development
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">NEXT Js</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/react">
                                            <a>
                                                <h3 className="h1">NEXT Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            The world's most popular frontend web development Framework
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">JavaScript</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/react">
                                            <a>
                                                <h3 className="h1">JavaScript</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            Learn basic to advance JavaScript
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Free Resources for Dev</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/react">
                                            <a>
                                                <h3 className="h1">Free Resources for Dev</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                           Find Free Resources for Development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Index);
