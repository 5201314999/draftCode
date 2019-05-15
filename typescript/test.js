function greeter(person) {
    return 'hello' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Jane',
    lastName: 12
};
greeter(user);
