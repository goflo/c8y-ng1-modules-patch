"use strict";angular.module("c8y.smartRules").directive("smartRuleParamInputEscalationSteps",function(){return e.$inject=["$scope","smartRuleTemplatesSvc","gettext","gettextCatalog"],{require:"smartRuleParamInput",scope:{rule:"=",param:"=",ruleTemplate:"="},restrict:"E",templateUrl:":::PLUGIN_PATH:::/views/paramInputEscalationSteps.html",controller:e};function e(i,e,t,n){var a,o,p=[{label:t("Always"),ifFailedStepRef:null}];function r(){var e,t,n;o=_.cloneDeep(i.param.stepTypes),i.stepTypes=o,e=i.ruleTemplate.paramGroups,t=[].concat(e.input.params).concat(e.output.params),n=_.map(t,"property"),_.forEach(o,_.partial(u,n))}function u(i,a){a.params=a.params||[],a.associatedRuleTemplateName&&e.getTemplateByName(a.associatedRuleTemplateName).then(function(e){a._active=e._active;var t=e.paramGroups,n=[].concat(t.input.params).concat(t.output.params);_.forEach(n,function(e){_.includes(i,e.property)||a.params.push(e)})})}function c(e){return e.ifFailed||0}function f(e){return{config:e,executionCondition:{ifFailed:e.ifFailed},expanded:!1,type:_.find(o,{associatedRuleTemplateName:e.ruleTemplateName})}}function l(e){p.push({ifFailedStepRef:e})}function d(t){_.isUndefined(t.executionCondition.ifFailed)?t.executionCondition=p[0]:t.executionCondition=_.find(p,function(e){return m(e.ifFailedStepRef)===t.executionCondition.ifFailed})}function s(t){return!!_.find(a,function(e){return e.executionCondition&&e.executionCondition.ifFailedStepRef===t})}function m(e){return a.indexOf(e)}function x(e){var t=_.assign({},e.config);return t.ruleTemplateName=e.type.associatedRuleTemplateName,e.executionCondition&&e.executionCondition.ifFailedStepRef&&(t.ifFailed=m(e.executionCondition.ifFailedStepRef)),t}i.executionConditions=p,i.icon=function(e){return e&&e.type&&e.type.icon},i.executionConditionsFilter=function(t){return function(e){return!(e.ifFailedStepRef&&e.ifFailedStepRef.type&&!e.ifFailedStepRef.type.failable||e.ifFailedStepRef===t||e.ifFailedStepRef&&e.ifFailedStepRef.executionCondition.ifFailedStepRef===t)}},i.addStep=function(){var e={type:o[0],expanded:!0,config:{},executionCondition:p[0]};a.push(e),l(e)},i.canRemoveStep=function(e){return!s(e)},i.removeStep=function(e){var t;t=e,p=_.filter(p,function(e){return e.ifFailedStepRef!==t}),i.executionConditions=p,a=_.without(a,e),i.steps=a},i.getStepNo=m,i.toggleExpand=function(e){e.expanded=!e.expanded},i.executionConditionLabel=function(e){var t=e.label;return e.ifFailedStepRef&&(t=n.getString("On step {{stepNo}} failed",{stepNo:m(e.ifFailedStepRef)+1})),t},i.canChangeStepType=function(e){return!(e.type.failable&&s(e))},i.canChangeExecutionCondition=function(e){var t=_.reject(a,"executionCondition.ifFailedStepRef");return!(1===t.length&&t[0]===e)},i.getStepTooltip=function(e){return e.expanded?t("Collapse"):t("Expand")},i.$watch("steps",function(e){var t=_(e).map(x).sortBy(c).value();i.rule.config[i.param.property]=t},!0),r(),a=_(i.rule.config[i.param.property]||[]).sortBy(c).map(f).value(),i.steps=a,_.forEach(a,l),_.forEach(a,d)}});