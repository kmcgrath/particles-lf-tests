var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: 'condensation-particles.us-east-1'
      },
      prefix: 'particles-lf-tests',
      clean: true,
      validate: true,
      create: true
    }
  ],
  dist: 'dist'
};

module.exports = config;
