<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/Hackthon/Hackthon-Back/controllers/UserAddController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/Hackthon/Hackthon-Back/controllers/AuthController.php'; 

$authController = new AuthController($authController);
$userAddController = new UserAddController();


$router->get('/user/{id}', function($id) {
    require_once $_SERVER['DOCUMENT_ROOT'] . '/Hackthon/Hackthon-Back/controllers/UserGetController.php';
    $userGetController = new UserGetController(); 
    return $userGetController->getUserById($id); 
});


$router->post('/login', function() use ($authController) {
    return $authController->login(); // Chama o método da controller
});

$router->post('/register', function() use ($userAddController) {
    return $userAddController->addUser(); 
});


$router->post('/questpost', function() {
    require_once $_SERVER['DOCUMENT_ROOT'] . '/Hackthon/Hackthon-Back/controllers/QuestController.php';
    $questController = new QuestController(); 
    return $questController->postQuest(); 
});


$router->get('/questget', function() {
    require_once $_SERVER['DOCUMENT_ROOT'] . '/Hackthon/Hackthon-Back/controllers/ResponseAddController.php';
    $responseAddController = new ResponseAddController(); 
    return $responseAddController->QuestInsertController();
});


$router->post('/edit', function() {
    require_once $_SERVER['DOCUMENT_ROOT'] . '/Hackthon/Hackthon-Back/controllers/UserEditController.php'; 
    $userEditController = new UserEditController(); 
    return $userEditController->editUser(); 
});
