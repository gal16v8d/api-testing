function isLocalEnv(context) {
    return context.vars['$environment'] === 'local';
}

function beforeRequest(requestParams, context, ee, next) {
    console.log('[DEBUG] requestParams', requestParams);
    console.log('[DEBUG] context data', {
        target: context.vars.target,
        env: context.vars['$environment'],
        isLocal: context.vars.isLocal});
    next();
}

function scenarioSetup(context, ee, next) {
    context.vars.isLocal = Boolean(isLocalEnv(context));
    return next();
}

module.exports = {
    beforeRequest,
    scenarioSetup,
};