export default class {
    render () {
        let {
            a
        } = this,
            // Presence of variable declaration after destruction causes the error.
            b;
    }
}
