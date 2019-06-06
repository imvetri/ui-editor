export function close() {
    this.setState({ showMessage: false });
}

export function open() {
    this.setState({ showMessage: true });
}
