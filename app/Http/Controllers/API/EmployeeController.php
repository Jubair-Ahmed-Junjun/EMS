<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function Employee(){
        $Employee = Employee::all();
        return response()->json([
            'status' => 200,
            'Employee' => $Employee,
        ]);
    }
    public function store(Request $request){
        $Employee  = new Employee();
        $Employee -> name = $request->input('name');
        $Employee -> email = $request->input('email');
        $Employee -> age = $request->input('age');
        $Employee -> gender = $request->input('gender');
        $Employee -> DOB = $request->input('DOB');
        $Employee -> hobbies = $request->input('hobbies');
        $Employee -> picture = $request->input('picture');
        $Employee -> save();
        return response()->json([
            'status' => 200,
            'message' => 'Employee Added Successfully',
        ]);
    }
    public function show($id)
    {
        $findEmployee = Employee::find($id);
        if($findEmployee)
        {
            return $findEmployee;
        }else{
            $message = "Not found";
            return $message;
        }
    }
    public function update(Request $request, $id)
    {
        $find = Employee::find($id);
        $done = $find->update($request->all());
        if($done)
        {
            $message = "Employee updated successfully";
            return $message;
        }else{
            $message = "Something Error";
            return $message;
        }
    }

    public function destroy($id)
    {
        $find = Employee::find($id);
        $done = $find->delete();
        if($done)
        {
            $message = "Employee deleted successfully";
            return $message;
        }else{
            $message = "Something Error";
            return $message;
        }
    }
}
