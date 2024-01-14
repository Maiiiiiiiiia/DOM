// Протестируйте функцию, которая генерирует случайного пользователя. Пользователь, в данном случае, это объект с тремя полями:

// email
// firstName
// lastName
// Для генерации данных используется библиотека fakerator

test('объект нужной структуры', () => {
    expect(buildUser()).toEqual({
      email: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
    });
  });
  
  test('объект с другими данными', () => {
    const user1 = buildUser();
    const user2 = buildUser();
    expect(user1).not.toEqual(user2);
  });
  
  test('установка свойств через параметры', () => {
    expect(buildUser({ firstName: 'Petya' })).toEqual({
      email: expect.any(String),
      firstName: 'Petya',
      lastName: expect.any(String),
    });
  });

  // Teaches solution 
//   test('buildUser fields', () => {
//     const user1 = buildUser();
//     expect(user1).toEqual(expect.objectContaining({
//       email: expect.any(String),
//       firstName: expect.any(String),
//       lastName: expect.any(String),
//     }));
//   });
  
//   test('buildUser random', () => {
//     const user1 = buildUser();
//     const user2 = buildUser();
//     expect(user1).not.toEqual(user2);
//   });
  
//   test('buildUser override', () => {
//     const newData1 = {
//       email: 'test@email.com',
//     };
//     const user1 = buildUser(newData1);
//     expect(user1).toMatchObject(newData1);
//   });