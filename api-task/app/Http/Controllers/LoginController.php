<?php

namespace App\Http\Controllers;

use App\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
	public function login(Request $request) {
		$this->validate($request, [
			"email" => 'required|email',
			"password" => 'required'
		]);

		$user = User::where('email', $request->email)->first();

		if (is_null($user)) return response() -> json('Invalid user', 401);

		if (!Hash::check($request->password, $user->password)) return response() -> json('Invalid password', 401);

		$data = ["email" => $request->email, "password" => $request->password];
		$token = JWT::encode($data, env('JWT_KEY'));
		return ["token" => $token];
	}
}
