import { createElement } from 'rax';

function Document(props) {
  const {
    publicPath,
    initialHtml,
    initialData,
    scripts,
  } = props;

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <title>rax-hello</title>
      </head>
      <body>
        {/* root container */}
        <div id="root" dangerouslySetInnerHTML={{ __html: initialHtml || '' }} />
        {/* initial data from server side */}
        <script data-from="server" dangerouslySetInnerHTML={{__html: 'window.__INITIAL_DATA__=' + initialData}} />
        {scripts.map((src) => <script src={`${publicPath}${src}`} />)}
      </body>
    </html>
  );
}

export default Document;
