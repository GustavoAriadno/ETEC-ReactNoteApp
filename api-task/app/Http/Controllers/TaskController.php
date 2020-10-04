<?php

namespace App\Http\Controllers;

use App\Task; 
use Illuminate\Http\Request;

class TaskController extends Controller
{
	public function index(){
    	return Task::all();
    }

	public function store(Request $request){
		return response() -> json(
			Task::create(["title" => $request->get("title")]),
			201
		);
    }
}