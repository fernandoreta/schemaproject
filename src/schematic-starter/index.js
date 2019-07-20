"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const utils_1 = require("./utils");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
function schematicStarter(_options) {
    _options.selector = `app-${strings_1.dasherize(_options.name)}`;
    _options.style = "css";
    return (tree, context) => {
        // todo: add a check for a missing name property
        if (!_options.name) {
            throw new schematics_1.SchematicsException('Entity name is required');
        }
        const path = `./src/app/components`;
        // todo: add debug statement
        context.logger.debug(`adding files to ${path} dir`);
        // todo: use the getBase64Image function and override the browserType property on the _options object
        _options.browserType = utils_1.getBase64Image(_options.browserType);
        // todo: apply template and move rules to the source files
        return schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template(Object.assign({}, core_1.strings, _options)),
            schematics_1.move(path),
        ])(context);
    };
}
exports.schematicStarter = schematicStarter;
//# sourceMappingURL=index.js.map