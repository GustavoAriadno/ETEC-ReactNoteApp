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
			Task::create($request->all()),
			201
		);
	}
	
	public function show(int $id){
		$task = Task::find($id);
		if (is_null($task)) return response() -> json(null, 204);
		return ($task);
	}

	public function destroy(int $id){
		$qtOfErased = Task::destroy($id);
		if ($qtOfErased === 0) return response() -> json(null, 404);
		// return response() -> json(null, 200);
		return Task::all();
	}

	public function update(int $id, Request $request){
		$task = Task::find($id);
		if (is_null($task)) return response() -> json(null, 404);
		
		$task->fill($request->all());
		$task->save();

		// return $task;
		return Task::all();
	}

	public function increment(int $id){
		$task = Task::find($id);		
		$task->status += 10;
		if ($task->status > 100) $task->status = 100;
		$task->save();
		// return $task;
		return Task::all();
	}

	public function decrement(int $id){
		$task = Task::find($id);		
		$task->status -= 10;
		if ($task->status < 0) $task->status = 0;
		$task->save();
		// return $task;
		return Task::all();
	}
}