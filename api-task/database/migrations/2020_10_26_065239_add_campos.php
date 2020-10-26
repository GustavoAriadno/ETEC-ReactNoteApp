<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCampos extends Migration
{
    public function up()
    {
		Schema::table('tasks', function (Blueprint $table) {
			$table->string("description")->nullable();
			$table->integer("status")->default(0);
			$table->string("project")->default('');
		});
	}

	public function down()
    {
		Schema::table('tasks', function (Blueprint $table) {
			$table->dropColumn("description");
			$table->dropColumn("status");
			$table->dropColumn("project");
		});
    }
}
