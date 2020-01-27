<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title>Test polindrom searching application</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="img/icon.png">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="/css/normalize.css">
  <link rel="stylesheet" href="/css/main.css">
  <meta name="theme-color" content="#fafafa">
</head>

<body>
  <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <div class="container">
    
    <div class="row with-shadow">
      <div class="col-2">
        <a class="logo" href="/">M</a>
      </div>
    </div>
    
    <div class="row mart-150">
      <div class="col-4">
        <h1 class="heading">Приложение</h1>
        <p class="subheading">Веб приложение, которое <br> находит полиндромы</p>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12">
        <form data="search-form">
           <div class="form-group">
            <input type="text" class="form-control" name="searchString" placeholder="Полиндром" />
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block bg-color-native-blue">Найти</button>
        </form>
      </div>
    </div>
    
    <div class="row mart-100 hide" data="search-result">
      <div class="col-12">
        <p class="answer-head with-shadow pb-2" data="result-head">Не найдено ни одного палиндрома</p>
        <ol class="mt-5" data="result-block"></ol>
      </div>
    </div>
    
  </div>

  <script src="/js/vendor/modernizr-3.8.0.min.js?<?=time()?>"></script>
  <script src="//code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.4.1.min.js"><\/script>')</script>
  <script src="//cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="/js/plugins.js?<?=time()?>"></script>
  <script src="/js/main.js?<?=time()?>"></script>
</body>

</html>
