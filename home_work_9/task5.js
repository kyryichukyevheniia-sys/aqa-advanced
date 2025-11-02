const users = [
    { firstName: "John", lastName: "Doe"},
    { age: 30, email: "xxx.gmail.com"},
    { }
];
for (const user of users) {
    const { firstName, lastName, email, age } = user;
    console.log (`firstName: ${firstName}, lastName: ${lastName}, email: ${email}, age: ${age}`);
}