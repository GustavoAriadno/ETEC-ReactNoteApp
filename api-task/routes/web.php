<?php


$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/task', "TaskController@index");

$router->post('/task', "TaskController@store");
