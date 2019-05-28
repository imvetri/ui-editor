export function prepareElement(element) {

    let defaults = {
        state: {},
        style: {}
    };
    return Object.assign(defaults, element);
}