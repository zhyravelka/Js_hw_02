const formatString = function(string) {
    
    if(string.length>40) { 
        string = string.substr(0,39);
        string = string + '...';
    }
    return string;
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка