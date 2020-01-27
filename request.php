<?php

    require_once('vendor/autoload.php');

    use TestPoly\SearchPalindromes;
    use TestPoly\SearchController;

    $params = $_GET ?? null;
    $finder = new SearchController(new SearchPalindromes($params));

    if($finder->validate()) {
    	$response = $finder->doSearching()->getResult();
    } else {
    	$response = $finder->getErrors();
    }

    echo json_encode($response);
    
?>