import * as Ask from 'ask-sdk';

import {ErrorHandler} from "./handlers/common/errorHandler";
import {ExitHandler}  from "./handlers/common/exitHandler";
import {FallbackHandler}  from "./handlers/common/fallbackHandler";
import {HelpHandler}  from "./handlers/common/helpHandler";
import {LaunchRequestHandler}  from "./handlers/common/launchRequestHandler";
import {RepeatHandler}  from "./handlers/common/repeatHandler";
import {SessionEndedRequestHandler}  from "./handlers/common/sessionEndedRequestHandler";

import {LocalizationInterceptor}  from "./interceptors/localizationInterceptor";

import {languageStrings}  from "./languageStrings";

export const handler = Ask.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpHandler,
    RepeatHandler,
    FallbackHandler,
    ExitHandler,
    SessionEndedRequestHandler,
  )
  .addRequestInterceptors(LocalizationInterceptor(languageStrings))
  .addErrorHandlers(ErrorHandler)
  .lambda();
