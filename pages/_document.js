import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Natraj Pen Pencil</title>
          <meta name="description" content="p training by the experts help in the development of the individuals." />
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
          <link rel="icon" href="/assets/images/fevicon.html" type="image/gif" />
          <link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.min.css" />
          <link rel="stylesheet" href="../../netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
          <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.theme.default.min.html" />
          <link rel="stylesheet" href="../../cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="/assets/css/slick.min.css"/>
          <link rel="stylesheet" type="text/css" href="/assets/css/slick-theme.min1.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/jquery.min.js"></script>
          <script src="/assets/js/popper.min.js"></script>
          <script src="/assets/js/bootstrap.bundle.min.js"></script>
          <script src="/assets/js/jquery-3.0.0.min.js"></script>
          <script src="/assets/js/plugin.js"></script>

          <script src="/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
          <script src="/assets/js/custom.js"></script>

          <script src="/assets/js/owl.carousel.html"></script>


        </body>
      </Html>
    )
  }
}

export default MyDocument