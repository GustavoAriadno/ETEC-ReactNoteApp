<?php


$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'task'], function () use ($router){
	$router->get('', "TaskController@index");
	$router->post('', "TaskController@store");
	$router->get('{id}', "TaskController@show");
	$router->delete('{id}', "TaskController@destroy");
	$router->put('{id}', "TaskController@update");
	$router->get('increment/{id}', "TaskController@increment");
	$router->get('decrement/{id}', "TaskController@decrement");
});