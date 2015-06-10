# iptools-jquery-charcounter [![Build Status](http://img.shields.io/travis/interactive-pioneers/iptools-jquery-charcounter.svg)](https://travis-ci.org/interactive-pioneers/iptools-jquery-charcounter)

jQuery textarea character count / limit plugin

## Features
Displays the remaining characters and limits input to a maximum length.

## Requirements

- jQuery (version TBD)

## Example

```html
<textarea data-max-length="999"></textarea>

<script src="src/iptools-jquery-charcounter.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $('textarea').iptCharCounter({
      // options
    });
  });
</script>

```

## Contributions

### Bug reports, suggestions

- File all your issues, feature requests [here](https://github.com/interactive-pioneers/iptools-jquery-charcounter/issues)
- If filing a bug report, follow the convention of _Steps to reproduce_ / _What happens?_ / _What should happen?_
- __If you're a developer, write a failing test instead of a bug report__ and send a Pull Request

### Code

1. Fork it ( https://github.com/[my-github-username]/iptools-jquery-charcounter/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Develop your feature by concepts of [TDD](http://en.wikipedia.org/wiki/Test-driven_development), see [Tips](#tips)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

### Tips

Following tasks are there to help with development:

- `grunt watch:bdd` listens to tests and source, reruns tests
- `grunt qa` run QA task that includes tests and JSHint
- `grunt build` minify source to dist/

## Licence
Copyright © 2015 Interactive Pioneers GmbH. Licenced under [GPLv3](LICENSE).