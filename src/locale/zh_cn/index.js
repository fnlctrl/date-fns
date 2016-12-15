var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')
var getTranslation = require('./translations/index.js').getTranslation

/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author Changyu Geng [@KingMario]{@link https://github.com/KingMario}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}
