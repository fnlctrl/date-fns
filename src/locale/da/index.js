var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')
var getTranslation = require('./translations/index.js').getTranslation

/**
 * @category Locales
 * @summary Danish locale.
 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}
