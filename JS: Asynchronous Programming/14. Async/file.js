// Реализуйте и экспортируйте асинхронную функцию exchange(), которая обменивает содержимое двух файлов.

export const exchange = async (file1, file2) => {
    //читаем файлы
    const reading1 = await fsp.readFile(file1, 'utf-8');
    const reading2 = await fsp.readFile(file2, 'utf-8');
  
    const [dataFirst, dataSecond] = await Promise.all([reading1, reading2]);
    
  // меняем содержимое файлов
    await fsp.writeFile(file1, dataSecond);
    await fsp.writeFile(file2, dataFirst);
  };