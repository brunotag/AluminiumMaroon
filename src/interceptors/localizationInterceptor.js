import i18n from 'i18next';
import sprintf from 'i18next-sprintf-postprocessor';

export function LocalizationInterceptor (languageStrings) {
  return {
    process(handlerInput) {
      const localizationClient = i18n.use(sprintf).init({
        lng: handlerInput.requestEnvelope.request.locale,
        overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
        resources: languageStrings,
        returnObjects: true,
      });

      const attributes = handlerInput.attributesManager.getRequestAttributes();
      attributes.t = function (...args) {
        return localizationClient.t(...args);
      };
    },
  };
}
