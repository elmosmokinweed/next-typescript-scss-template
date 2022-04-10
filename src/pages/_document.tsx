import Document, { Html, Head, Main, NextScript } from 'next/document';

const FONT_NAME = 'Poppins';
const FONT_TYPES = ['Regular', 'Bold', 'Light'];
const FONT_EXTENSIONS = ['eot', 'ttf', 'woff'];

class CustomDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          {FONT_TYPES.map((type) =>
            FONT_EXTENSIONS.map((extension) => (
              <link
                key={`${type}-${extension}`}
                rel="preload"
                href={`/fonts/${FONT_NAME}-${type}.${extension}`}
                as="font"
                crossOrigin=""
              />
            ))
          )}
          <link rel="icon" type="image/ico" href="/Favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
