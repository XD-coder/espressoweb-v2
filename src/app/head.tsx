export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <script dangerouslySetInnerHTML={{
        __html: `
          // Force viewport to device width and prevent scaling
          (function() {
            var metaViewport = document.querySelector('meta[name=viewport]');
            function onResize() {
              // Double apply the viewport settings to really prevent scaling
              metaViewport.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
              setTimeout(function() {
                document.body.style.width = window.innerWidth + 'px';
              }, 300);
            }
            window.addEventListener('resize', onResize);
            window.addEventListener('orientationchange', onResize);
            onResize();
          })();
        `
      }} />
    </>
  )
}
