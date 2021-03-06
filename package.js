Package.describe({
  name: 'dstagner:autoform-markdown-editor',
  version: '1.0.5',
  summary: 'A github like markdown editor using autoform and perak:markdown, forked from lnmunhoz:autoform-markdown-editor',
  git: 'https://github.com/lnmunhoz/meteor-autoform-markdown-editor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['templating', 'reactive-var'], 'client');
  api.use(['perak:markdown@1.0.5', 'aldeed:autoform@6.0.0'], 'client');
  api.addFiles([
    'markdown.html',
    'jquery.selection.js',
    'markdown.js',
    'markdown.css'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lnmunhoz:autoform-markdown-editor');
});
