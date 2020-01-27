# PHP Test Application on search palindrome string

Простое тестовое приложение для проверки текущего уровня навыков PHP и JS
- [TestApp](https://github.com/kinoman34/palindromeTest)

# Автор
- [Мистер Серый](https://github.com/kinoman34/)

# Для установки вам потребуется **GIT** и **Сomposer**

```sh
$ git clone https://github.com/kinoman34/palindromeTest.git
$ cd palindromeTest
$ php composer.phar dump-autoload
```
# В классе поиска реализованы 2 функци поиска палиндромов
# общая и фнукция поиска Манакера, для переключения раскоментируйте нужную ф-ю

```php
// src/lib/SearchController.php:27

public function doSearching()
{
	// Regular search
	$this->result = $this->searcher->init()->search();

	// Manaker search
	// $this->result = $this->searcher->init()->searchManaker();

	return $this;
}

```
# Если все было сделано правильно

PalindromeTest - должен заработать

# Composer и зависимости

- [Palindromes](https://github.com/reflectedMike/palindromes) - Дай бог здоровья чуваку который написал эту либу

Совсем ничего не юзать было бы просто неудобно и долго (да и глупо как то)

# Вобщем то это все

Спасибо что заглянули!