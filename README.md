# higher-order-components

struttura chiamate server reusable components

UTILIZZO:
const resourceProps = {
[resourceName]: data,
[`onChange${capitalize(resourceName)}`]: onChange,
[`onSave${capitalize(resourceName)}`]: onSave,
[`onReset${capitalize(resourceName)}`]: onReset,
};
