import workboxBuild from 'workbox-build';
// NOTE: This should be run *AFTER* all your assets are built
(() => {
  // This will return a Promise
  workboxBuild
    .injectManifest({
      maximumFileSizeToCacheInBytes: 45000000,
      swSrc: 'src/sw-template.js', // this is your sw template file
      swDest: 'build/service-worker.js', // this will be created in the build step
      globDirectory: 'build',
      globPatterns: ['**/*.{js,css,html,png,svg,mp4}'], // precaching jpg files
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    })
    .catch(console.error);
})();
